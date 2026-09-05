/* project.js — ficha de proyecto: render desde window.PROJECTS (assets/projects/data.js) vía ?p=slug. */
(function () {
  "use strict";

  function slugify(str) {
    return String(str).toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  const params = new URLSearchParams(location.search);
  const slug = params.get("p") || "";
  const project = (window.PROJECTS || []).find(
    (p) => p.slug === slug || slugify(p.title) === slug
  );

  const title = document.getElementById("pTitle");
  const ficha = document.getElementById("ficha");

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
  }

  if (!project) {
    title.textContent = "./404_proyecto_no_encontrado";
    ficha.hidden = false;
    ficha.innerHTML =
      '<p class="noscript-note">No existe el proyecto solicitado.</p>' +
      '<p><a class="btn btn--primary" href="index.html#portfolio">[ ver portfolio ]</a></p>';
    return;
  }

  document.title = project.title + " — Lucas Taborda";

  title.textContent = "./" + project.slug;
  ficha.hidden = false;

  /* media */
  const media = document.getElementById("pMedia");
  if (project.img) {
    const img = document.createElement("img");
    img.src = project.img;
    img.alt = "Captura de " + project.title;
    img.width = 640; img.height = 360;
    img.loading = "lazy";
    img.onerror = function () { img.remove(); };
    media.appendChild(img);
  } else {
    media.innerHTML = '<span class="ph">▶ [gif del proyecto pendiente]</span>';
  }

  /* tags */
  document.getElementById("pTags").innerHTML = project.tags
    .map((t) => "<li>" + escapeHtml(t) + "</li>").join("");

  /* links demo/repo/vídeo */
  const links = [];
  if (project.demo) links.push('<a href="' + escapeHtml(project.demo) + '" target="_blank" rel="noopener">[demo]</a>');
  if (project.repo) links.push('<a href="' + escapeHtml(project.repo) + '" target="_blank" rel="noopener">[repo]</a>');
  if (project.video) links.push('<a href="' + escapeHtml(project.video) + '" target="_blank" rel="noopener">[vídeo]</a>');
  if (!links.length) links.push('<span class="dim">[próximamente]</span>');
  document.getElementById("pLinks").innerHTML = links.join("");

  /* textos */
  document.getElementById("pResumen").textContent = project.resumen || project.desc;
  document.getElementById("pRol").textContent = (project.meta && project.meta.rol) || "—";
  document.getElementById("pPeriodo").textContent = (project.meta && project.meta.periodo) || "—";

  const stack = (project.meta && project.meta.stack) || [];
  document.getElementById("pStack").innerHTML = stack
    .map((s) => "<li>" + escapeHtml(s) + "</li>").join("");

  const highlights = project.highlights || [];
  document.getElementById("pHighlights").innerHTML = highlights
    .map((h) => "<li>" + escapeHtml(h) + "</li>").join("");

  document.getElementById("pReto").textContent = project.reto || "—";
  document.getElementById("pSolucion").textContent = project.solucion || "—";
  document.getElementById("pResultado").textContent = project.resultado || "—";

  /* año footer */
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();