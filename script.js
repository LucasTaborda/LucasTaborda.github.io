/* Web personal de Lucas Taborda — vanilla JS, sin dependencias. */

(function () {
  "use strict";

  /* ---------- idioma (ES por defecto, toggle EN) ---------- */
  const dict = {
    en: {
      "sobre-mí": "about", skills: "skills", experiencia: "experience",
      sdd: "sdd", portfolio: "portfolio", contacto: "contact",
      "Saltar al contenido": "Skip to content",
      "Fotografía de Lucas Taborda": "Photo of Lucas Taborda",
      "Abrir menú": "Open menu", "Cerrar menú": "Close menu",
      "Nivel web: 9 de 10": "Web level: 9 of 10",
      "Nivel IA agéntica: 9 de 10": "Agentic AI level: 9 of 10",
      "Nivel juegos: 7 de 10": "Games level: 7 of 10",
      "Nivel herramientas: 8 de 10": "Tools level: 8 of 10",
      "Filtrar proyectos": "Filter projects",
      "email copiado al portapapeles": "email copied to clipboard",
      "Activa JavaScript para ver el portfolio — o mira los proyectos directamente en GitHub.":
        "Enable JavaScript to see the portfolio — or check the projects directly on GitHub.",
      " Stack": " Stack"
    }
  };

  const langBtn = document.getElementById("langBtn");
  const navAnchors = document.querySelectorAll(".nav-links a");

  let lang = "es";

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang === "en" ? "en" : "es";

    // textos con pares data-en
    document.querySelectorAll("[data-en]").forEach((el) => {
      if (lang === "en") {
        if (!el.dataset.es) el.dataset.es = el.innerHTML;
        el.innerHTML = el.dataset.en;
      } else if (el.dataset.es) {
        el.innerHTML = el.dataset.es;
      }
    });

    // nav
    navAnchors.forEach((a) => {
      if (lang === "en" && dict.en[a.getAttribute("href").slice(1)]) {
        a.textContent = dict.en[a.getAttribute("href").slice(1)];
      } else if (lang === "es") {
        a.textContent = a.getAttribute("href").slice(1);
      }
    });

    // labels/aria
    document.querySelectorAll('[aria-label]').forEach((el) => {
      const cur = el.getAttribute("aria-label");
      if (lang === "en" && dict.en[cur]) el.setAttribute("aria-label", dict.en[cur]);
    });

    langBtn.textContent = lang === "es" ? "EN" : "ES";
    langBtn.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
  }

  langBtn.addEventListener("click", () => applyLang(lang === "es" ? "en" : "es"));

  /* ---------- menú móvil ---------- */
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  function closeMenu() {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menú");
  }

  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- typing de terminal ---------- */
  const typing = document.getElementById("typing");
  const phrase = typing.dataset.text;

  function typeLoop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { typing.textContent = phrase; return; }
    let i = 0;
    (function tick() {
      typing.textContent = phrase.slice(0, i++);
      if (i <= phrase.length) setTimeout(tick, 65);
      else setTimeout(() => { i = 0; tick(); }, 3200);
    })();
  }

  typeLoop();

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- portafolio (datos + render + filtros) ---------- */
  /* Datos en assets/projects/data.js (window.PROJECTS): fuente única compartida
     entre la landing y las fichas de proyecto (project.html?p=slug). */
  const PROJECTS = window.PROJECTS || [];

  let filter = "all";

  function renderGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    PROJECTS
      .filter((p) => filter === "all" || p.cat === filter)
      .forEach((p) => {
        const art = document.createElement("article");
        art.className = "card proj";

        const media = p.img
          ? '<img src="' + p.img + '" alt="Captura de ' + p.title + '" loading="lazy" width="640" height="400" onerror="this.remove()">'
          : '<span class="ph">▶ [gif del proyecto pendiente]</span>';
        const tags = p.tags.map((t) => "<li>" + t + "</li>").join("");

        const links = [];
        if (p.demo) links.push('<a href="' + p.demo + '" target="_blank" rel="noopener">[demo]</a>');
        if (p.repo) links.push('<a href="' + p.repo + '" target="_blank" rel="noopener">[repo]</a>');
        if (p.video) links.push('<a href="' + p.video + '" target="_blank" rel="noopener">[vídeo]</a>');
        if (!links.length) links.push('<span class="dim">[próximamente]</span>');

        const slug = p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const fichaUrl = "project.html?p=" + encodeURIComponent(slug);

        art.innerHTML =
          '<div class="proj-media">' + media + "</div>" +
          '<div class="proj-body">' +
            '<h3><a href="' + fichaUrl + '">' + p.title + "</a></h3>" +
            "<p>" + p.desc + "</p>" +
            '<ul class="proj-tags">' + tags + "</ul>" +
            '<div class="proj-links">' + links.join("") + "</div>" +
          "</div>";

        grid.appendChild(art);
      });

    if (!grid.children.length) {
      grid.innerHTML = '<p class="noscript-note">No hay proyectos en esta categoría todavía.</p>';
    }
  }

  document.querySelectorAll(".fbtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filter = btn.dataset.filter;
      document.querySelectorAll(".fbtn").forEach((b) =>
        b.setAttribute("aria-pressed", String(b === btn))
      );
      renderGrid();
    });
  });

  renderGrid();

  /* ---------- copiar email + toast ---------- */
  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function copyEmail(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        () => showToast(lang === "es" ? "email copiado al portapapeles" : "email copied to clipboard"),
        () => fallbackCopy(text)
      );
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast(lang === "es" ? "email copiado al portapapeles" : "email copied to clipboard");
    } catch (_) {
      showToast(text);
    }
    ta.remove();
  }

  document.querySelectorAll("[data-copy]").forEach((el) => {
    el.addEventListener("click", () => copyEmail(el.dataset.copy));
  });

  /* ---------- easter egg: código Konami ← CRT flash ---------- */
  const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let kIndex = 0;

  document.addEventListener("keydown", (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (key === KONAMI[kIndex]) {
      kIndex++;
      if (kIndex === KONAMI.length) {
        kIndex = 0;
        document.body.classList.remove("crt");
        void document.body.offsetWidth;
        document.body.classList.add("crt");
      }
    } else {
      kIndex = key === KONAMI[0] ? 1 : 0;
    }
  });

  /* ---------- año ---------- */
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();