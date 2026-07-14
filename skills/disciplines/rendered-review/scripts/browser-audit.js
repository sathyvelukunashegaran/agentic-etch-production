(function installAgenticEtchAudit(global) {
  'use strict';

  function selectorFor(element) {
    if (!element || element.nodeType !== 1) return null;
    if (element.id) return `#${CSS.escape(element.id)}`;
    const parts = [];
    let node = element;
    while (node && node.nodeType === 1 && parts.length < 4) {
      let part = node.tagName.toLowerCase();
      const classes = [...node.classList].slice(0, 2);
      if (classes.length) part += `.${classes.map((value) => CSS.escape(value)).join('.')}`;
      parts.unshift(part);
      node = node.parentElement;
    }
    return parts.join(' > ');
  }

  function labelledByText(element) {
    const ids = (element.getAttribute('aria-labelledby') || '')
      .split(/\s+/)
      .filter(Boolean);
    return ids
      .map((id) => document.getElementById(id)?.textContent || '')
      .join(' ')
      .trim();
  }

  function nativeLabelText(element) {
    if (!('labels' in element) || !element.labels) return '';
    return [...element.labels]
      .map((label) => label.textContent || '')
      .join(' ')
      .trim();
  }

  function accessibleName(element) {
    const explicit = element.getAttribute('aria-label')?.trim();
    if (explicit) return explicit;

    const labelledBy = labelledByText(element);
    if (labelledBy) return labelledBy;

    const nativeLabel = nativeLabelText(element);
    if (nativeLabel) return nativeLabel;

    const title = element.getAttribute('title')?.trim();
    if (title) return title;

    if (element.tagName === 'INPUT' && ['button', 'submit', 'reset'].includes(element.type)) {
      const value = element.value?.trim();
      if (value) return value;
    }

    const text = element.textContent?.trim();
    if (text) return text;

    const imageAlt = [...element.querySelectorAll('img[alt]')]
      .map((image) => image.alt)
      .join(' ')
      .trim();
    if (imageAlt) return imageAlt;

    return element.querySelector('svg title')?.textContent?.trim() || '';
  }

  function isVisible(element) {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
  }

  function parseRgb(value) {
    const match = value.match(/rgba?\(([^)]+)\)/);
    if (!match) return null;
    const parts = match[1].split(/[ ,/]+/).filter(Boolean).map(Number);
    if (parts.length < 3 || parts.some((part, index) => index < 3 && Number.isNaN(part))) return null;
    return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
  }

  function luminance(rgb) {
    const channel = (value) => {
      const normalized = value / 255;
      return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * channel(rgb.r) + 0.7152 * channel(rgb.g) + 0.0722 * channel(rgb.b);
  }

  function contrastRatio(a, b) {
    const bright = Math.max(luminance(a), luminance(b));
    const dark = Math.min(luminance(a), luminance(b));
    return (bright + 0.05) / (dark + 0.05);
  }

  function opaqueBackground(element) {
    let node = element;
    while (node) {
      const color = parseRgb(getComputedStyle(node).backgroundColor);
      if (color && color.a >= 0.95) return color;
      node = node.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }

  global.agenticEtchAudit = function agenticEtchAudit() {
    const findings = [];
    const add = (severity, rule, element, message, data = {}) => findings.push({
      severity,
      rule,
      selector: selectorFor(element),
      message,
      ...data,
    });

    if (!document.documentElement.lang.trim()) {
      add('high', 'document-language', document.documentElement, 'The document has no language declaration.');
    }
    if (!document.title.trim()) {
      add('high', 'document-title', document.head, 'The document title is empty.');
    }

    const mains = [...document.querySelectorAll('main')];
    if (mains.length !== 1) {
      add('high', 'main-landmark', document.body, `Expected exactly one main landmark; found ${mains.length}.`);
    }

    const ids = new Map();
    for (const element of document.querySelectorAll('[id]')) {
      const id = element.id;
      if (!id) continue;
      if (ids.has(id)) {
        add('high', 'duplicate-id', element, `Duplicate id "${id}".`, { duplicateOf: selectorFor(ids.get(id)) });
      } else {
        ids.set(id, element);
      }
    }

    let previousLevel = 0;
    for (const heading of document.querySelectorAll('h1,h2,h3,h4,h5,h6')) {
      const level = Number(heading.tagName[1]);
      if (previousLevel && level > previousLevel + 1) {
        add('medium', 'heading-jump', heading, `Heading level jumps from h${previousLevel} to h${level}.`);
      }
      previousLevel = level;
    }

    for (const image of document.querySelectorAll('img')) {
      if (!image.hasAttribute('alt')) {
        add('high', 'image-alt', image, 'Image is missing an alt attribute.');
      }
    }

    for (const control of document.querySelectorAll('input:not([type="hidden"]),select,textarea')) {
      if (!accessibleName(control)) {
        add('high', 'form-label', control, 'Form control has no associated label or accessible name.');
      }
    }

    const actionSelector = [
      'button',
      'a[href]',
      '[role="button"]',
      'input[type="button"]',
      'input[type="submit"]',
      'input[type="reset"]',
    ].join(',');
    for (const action of document.querySelectorAll(actionSelector)) {
      if (isVisible(action) && !accessibleName(action)) {
        add('high', 'action-name', action, 'Interactive element has no accessible name.');
      }
      const rect = action.getBoundingClientRect();
      if (isVisible(action) && (rect.width < 24 || rect.height < 24)) {
        add('low', 'target-size', action, `Interactive target is ${Math.round(rect.width)}x${Math.round(rect.height)}px.`);
      }
    }

    for (const link of document.querySelectorAll('a[href]')) {
      const href = link.getAttribute('href');
      if (!href || href === '#') {
        add('medium', 'empty-link', link, 'Link has an empty or placeholder destination.');
      }
    }

    const overflow = document.documentElement.scrollWidth - global.innerWidth;
    if (overflow > 1) {
      add('high', 'horizontal-overflow', document.documentElement, `Document is ${Math.round(overflow)}px wider than the viewport.`);
      for (const element of document.body.querySelectorAll('*')) {
        const rect = element.getBoundingClientRect();
        if (rect.right > global.innerWidth + 1 || rect.left < -1) {
          add('medium', 'overflow-element', element, 'Element extends beyond the viewport.', {
            rect: { left: rect.left, right: rect.right, width: rect.width },
          });
        }
      }
    }

    const textNodes = [...document.querySelectorAll('p,li,label,button,a,h1,h2,h3,h4,h5,h6')].filter(isVisible);
    for (const element of textNodes) {
      if (!element.textContent.trim()) continue;
      const style = getComputedStyle(element);
      const foreground = parseRgb(style.color);
      const background = opaqueBackground(element);
      if (!foreground) continue;
      const ratio = contrastRatio(foreground, background);
      const size = Number.parseFloat(style.fontSize);
      const weight = Number.parseInt(style.fontWeight, 10) || 400;
      const large = size >= 24 || (size >= 18.66 && weight >= 700);
      const required = large ? 3 : 4.5;
      if (ratio + 0.01 < required) {
        add('high', 'text-contrast', element, `Estimated contrast ${ratio.toFixed(2)}:1 is below ${required}:1.`, { ratio, required });
      }
    }

    const counts = findings.reduce((acc, finding) => {
      acc[finding.severity] = (acc[finding.severity] || 0) + 1;
      return acc;
    }, {});

    return {
      url: location.href,
      title: document.title,
      viewport: { width: global.innerWidth, height: global.innerHeight },
      counts,
      findings,
    };
  };
})(window);
