/* Theme handling: follows the device's light/dark setting by default,
   and remembers a manual choice made with the header toggle. */
(function () {
  var root = document.documentElement;
  var KEY = 'theme';
  var COLORS = { light: '#faf8f4', dark: '#0f1a24' };
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function stored() {
    try {
      var v = localStorage.getItem(KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch (e) { return null; }
  }

  function current() {
    return stored() || (mq && mq.matches ? 'dark' : 'light');
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) metas[i].setAttribute('content', COLORS[theme]);
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  // Runs in <head>, so the right theme is set before the page paints (no flash).
  apply(current());

  // If the visitor hasn't picked a theme, keep following the device setting live.
  function onSystemChange() { if (!stored()) apply(current()); }
  if (mq) {
    if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
    else if (mq.addListener) mq.addListener(onSystemChange);
  }

  document.addEventListener('DOMContentLoaded', function () {
    apply(current());
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
    });
  });
})();
