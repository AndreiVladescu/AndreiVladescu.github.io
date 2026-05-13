(function () {
  // ── Theme ────────────────────────────────────────────────────
  var STORAGE_KEY = 'theme';
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var saved = localStorage.getItem(STORAGE_KEY);
  var current = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', current);

  function setTheme(t) {
    current = t;
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(STORAGE_KEY, t);
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.textContent = t === 'dark' ? '[ light mode ]' : '[ dark mode ]';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.textContent = current === 'dark' ? '[ light mode ]' : '[ dark mode ]';
      btn.addEventListener('click', function () {
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    });

    // ── Mobile sidebar ───────────────────────────────────────────
    var body = document.body;
    var overlay = document.querySelector('.sidebar-overlay');
    var hamburger = document.querySelector('.hamburger');

    function openSidebar() { body.classList.add('sidebar-open'); }
    function closeSidebar() { body.classList.remove('sidebar-open'); }

    if (hamburger) hamburger.addEventListener('click', openSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);

    document.querySelectorAll('.sidebar-nav a').forEach(function (a) {
      a.addEventListener('click', closeSidebar);
    });
  });
})();
