document.addEventListener("DOMContentLoaded", function () {

  // --- Mobile nav toggle ---
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.textContent = isOpen ? "Close" : "Menu";
    });
  }

  // --- Header gets a hairline once the page scrolls ---
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // --- Scroll reveal: fade + rise elements marked [data-reveal] ---
  // Content is only hidden when <html> has the "js" class (set in <head>),
  // so the page is always readable if this script never runs.
  var revealEls = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (!revealEls.length) return;

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  // Stagger siblings so a row of tiles cascades in rather than all at once.
  var groups = new Map();
  revealEls.forEach(function (el) {
    var parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  groups.forEach(function (els) {
    els.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 0.1, 0.4) + "s";
    });
  });

  revealEls.forEach(function (el) { io.observe(el); });
});
