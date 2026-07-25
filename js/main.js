document.addEventListener("DOMContentLoaded", function () {

  // --- Page fade-in on load ---
  requestAnimationFrame(function () {
    document.body.classList.add("is-ready");
  });

  // --- Mobile nav toggle ---
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Header gets a soft shadow once the page scrolls ---
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // --- Scroll reveal: fade + rise elements marked [data-reveal] ---
  var revealEls = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );

      // Stagger elements that share a parent so groups (cards, spec items,
      // changelog entries) cascade in together rather than firing all at once.
      var groups = new Map();
      revealEls.forEach(function (el) {
        var parent = el.parentElement;
        if (!groups.has(parent)) groups.set(parent, []);
        groups.get(parent).push(el);
      });
      groups.forEach(function (els) {
        els.forEach(function (el, i) {
          el.style.transitionDelay = Math.min(i * 0.08, 0.4) + "s";
        });
      });

      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("in-view"); });
    }
  }

  // --- Fallback: if JS somehow errors before this point, never leave page invisible ---
});

// Absolute fallback in case DOMContentLoaded already fired or an error occurred above
window.addEventListener("load", function () {
  document.body.classList.add("is-ready");
});
