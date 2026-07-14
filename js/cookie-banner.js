/* openCCR — cookie-banner.js
   Shows a consent notice on first visit. Persists via localStorage. */

(function () {
  'use strict';

  var CONSENT_KEY = 'openccr.cookieConsent';

  if (localStorage.getItem(CONSENT_KEY) === 'accepted') return;

  function el(tag, cls) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    return node;
  }

  var overlay = el('div', 'cookie-overlay');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Cookie notice');

  var banner  = el('div', 'cookie-banner');
  var header  = el('div', 'cookie-banner__header');
  var icon    = el('span', 'cookie-banner__icon');
  var title   = el('h2', 'cookie-banner__title');
  var body    = el('p', 'cookie-banner__body');
  var actions = el('div', 'cookie-banner__actions');
  var accept  = el('button', 'cookie-banner__accept btn btn--primary');
  var decline = el('button', 'cookie-banner__decline');

  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '🍪';
  title.textContent = 'We use cookies';

  var strong = el('strong');
  strong.textContent = 'Your configuration data never leaves your device';
  body.appendChild(strong);
  body.appendChild(document.createTextNode(
    ' — everything is saved locally in your browser. We only collect' +
    ' anonymous visit statistics (Google Analytics) to understand how' +
    ' the tool is being used and improve it.'
  ));

  accept.textContent  = "Let's go";
  decline.textContent = 'No, thanks';

  header.appendChild(icon);
  header.appendChild(title);
  actions.appendChild(accept);
  actions.appendChild(decline);
  banner.appendChild(header);
  banner.appendChild(body);
  banner.appendChild(actions);
  overlay.appendChild(banner);
  document.body.appendChild(overlay);

  accept.addEventListener('click', function () {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    overlay.parentNode.removeChild(overlay);
  });

  decline.addEventListener('click', function () {
    window.location.href = 'https://www.google.com';
  });
}());
