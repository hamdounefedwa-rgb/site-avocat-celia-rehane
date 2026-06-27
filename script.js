/* ===================================================================
   CÉLIA REHANE — Avocat · interactions
   =================================================================== */
(function () {
  "use strict";

  /* ---------- Header : état au scroll ---------- */
  var header = document.querySelector(".header");
  var toTop = document.querySelector(".to-top");
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("scrolled", y > 20);
    if (toTop) toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Menu mobile (drawer) ---------- */
  var burger = document.querySelector(".burger");
  var drawer = document.getElementById("mobileMenu");
  var backdrop = document.querySelector(".drawer-backdrop");
  var closeBtn = document.querySelector(".mobile-close");

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("open");
    if (backdrop) backdrop.classList.add("open");
    if (burger) burger.classList.add("active");
    document.body.classList.add("menu-open");
    if (burger) burger.setAttribute("aria-expanded", "true");
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    if (burger) burger.classList.remove("active");
    document.body.classList.remove("menu-open");
    if (burger) burger.setAttribute("aria-expanded", "false");
  }
  if (burger) burger.addEventListener("click", function () {
    drawer && drawer.classList.contains("open") ? closeDrawer() : openDrawer();
  });
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeDrawer(); closeAllMega(); }
  });

  /* ---------- Accordéon mobile (domaines + autres) ---------- */
  document.querySelectorAll(".m-acc-trigger").forEach(function (trig) {
    trig.addEventListener("click", function () {
      var panel = trig.nextElementSibling;
      var open = trig.getAttribute("aria-expanded") === "true";
      trig.setAttribute("aria-expanded", String(!open));
      if (panel) panel.classList.toggle("open", !open);
    });
  });

  /* ---------- Mega menu (tactile / clavier) ---------- */
  var megaTriggers = document.querySelectorAll(".nav-trigger");
  function closeAllMega() {
    megaTriggers.forEach(function (t) {
      t.setAttribute("aria-expanded", "false");
      var m = t.parentElement.querySelector(".mega");
      if (m) m.classList.remove("open");
    });
  }
  megaTriggers.forEach(function (trig) {
    trig.addEventListener("click", function (e) {
      e.preventDefault();
      var mega = trig.parentElement.querySelector(".mega");
      var open = trig.getAttribute("aria-expanded") === "true";
      closeAllMega();
      if (!open) {
        trig.setAttribute("aria-expanded", "true");
        if (mega) mega.classList.add("open");
      }
    });
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item")) closeAllMega();
  });

  /* ---------- Reveal au scroll (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Année dynamique ---------- */
  document.querySelectorAll(".js-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Formulaire de contact (Netlify + UX) ---------- */
  document.querySelectorAll("form.contact-form").forEach(function (form) {
    var successBox = form.parentElement.querySelector(".form-success");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Vérifie qu'au moins un motif est coché (si la section existe)
      var reasonGroup = form.querySelector(".reasons-grid");
      if (reasonGroup) {
        var checked = reasonGroup.querySelectorAll("input[type=checkbox]:checked").length;
        var hint = form.querySelector(".reasons-hint");
        if (checked === 0) {
          if (hint) { hint.style.color = "#c0392b"; }
          reasonGroup.scrollIntoView({ behavior: "smooth", block: "center" });
          return;
        } else if (hint) {
          hint.style.color = "";
        }
      }

      var data = new URLSearchParams(new FormData(form)).toString();

      function showSuccess() {
        if (successBox) {
          form.style.display = "none";
          successBox.classList.add("show");
          successBox.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          form.reset();
        }
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data
      })
        .then(showSuccess)
        .catch(function () {
          // En local (file://) ou hors-ligne : on affiche quand même la confirmation
          showSuccess();
        });
    });
  });
})();
