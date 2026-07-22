/* ============================================================
   Joe Heffer — site behaviour
   Vanilla JS, no dependencies. All progressive enhancement:
   the site is fully readable with JS disabled.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- Theme toggle (persisted) ---------- */
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  if (nav && navToggle) {
    var closeNav = function () {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    };
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    // Close the menu after choosing a link.
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
    // Close on Escape.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ---------- Nav border on scroll ---------- */
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Active nav link (scroll spy) ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var setActive = function (id) {
      links.forEach(function (l) {
        l.classList.toggle('is-active', l.getAttribute('href') === '#' + id);
      });
    };
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Dynamic footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
