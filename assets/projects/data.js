/* assets/projects/data.js — fuente única de datos del portfolio (index + fichas). */
window.PROJECTS = [
  {
    slug: "the-last-masterpiece",
    title: "The Last Masterpiece",
    desc: "Videojuego de gamejam con un desafío de diseño puro: que mover la escenografía sea simple y divertido.",
    tags: ["unity", "game design", "gamejam"],
    cat: "games",
    img: "assets/projects/the-last-masterpiece.webp",
    demo: null, repo: null, video: null,
    meta: {
      rol: "[rol: gameplay / diseño]",
      periodo: "[nombre de la jam · 48/72h]",
      stack: ["Unity", "C#"]
    },
    resumen: "Juego de gamejam donde el desafío central de diseño fue la escenografía: en vez de mover al personaje, el jugador mueve el mundo. El reto era que esa mecánica se sintiera simple, intuitiva y, sobre todo, divertida.",
    highlights: [
      "Mecánica invertida: la escenografía es la protagonista y el resto del juego reacciona a ella.",
      "Diseño iterado bajo el tiempo límite de la jam: prototipo → playtest → ajuste, en ciclos cortos."
    ],
    reto: "El desafío de diseño: ¿cómo hacer que mover la escenografía sea simple y divertido? Controles claros, feedback inmediato y niveles que enseñen la mecánica sin necesidad de tutorial.",
    solucion: "Prototipado rápido en Unity con iteración corta: cada movimiento del escenario responde de forma visible e inmediata, y los niveles se construyen como lecciones — una idea nueva por nivel, dominada antes de pasar a la siguiente.",
    resultado: "[Pendiente: entrega en la jam, feedback de jugadores y links a itch.io / vídeo de gameplay.]"
  },
  {
    slug: "multifilo",
    title: "Multifilo",
    desc: "Sistema Drupal institucional para la Facultad de Filosofía y Letras: integración de módulos, temas propios y Docker.",
    tags: ["drupal", "docker", "php"],
    cat: "web",
    img: "assets/projects/multifilo.webp",
    demo: null, repo: null, video: null,
    meta: {
      rol: "Desarrollo y mantenimiento del sistema",
      periodo: "[años]",
      stack: ["Drupal", "Composer", "Docker", "PHP", "MySQL"]
    },
    resumen: "Sistema web institucional de la Facultad de Filosofía y Letras construido sobre Drupal: integración del ecosistema de módulos, theming propio para la capa de presentación y orquestación con Docker para entornos reproducibles de desarrollo a producción.",
    highlights: [
      "Integración y mantenimiento de los módulos del sistema, con actualizaciones controladas y documentadas.",
      "Temas propios: la identidad institucional traducida a la capa de presentación de Drupal.",
      "Entorno Dockerizado: el mismo stack corre igual en la máquina de cada dev que en producción."
    ],
    reto: "Una web institucional viva: muchos módulos con dependencias entre sí, configuraciones sensibles y la necesidad de que desarrollo reproduzca producción sin sorpresas. Actualizar sin romper era el riesgo cotidiano.",
    solucion: "Arquitectura Drupal gestionada con Composer, configuración versionada, temas custom y contenedores Docker para web y base de datos. Cada módulo entra por una necesidad concreta y queda documentado su rol dentro del sistema.",
    resultado: "[Pendiente de métricas: ej. despliegues reproducibles, tiempo de onboarding del equipo, estabilidad del sitio institucional.]"
  },
  {
    slug: "agente-ia",
    title: "[nombre del agente / herramienta IA]",
    desc: "[1 línea: qué automatiza, con qué agentes, qué resultado medible.]",
    tags: ["sdd", "agentes", "claude"],
    cat: "ia",
    img: "assets/projects/proyecto2.webp",
    demo: "#", repo: "#", video: null,
    meta: {
      rol: "[rol: diseño de spec + orquestación de agentes]",
      periodo: "[2025]",
      stack: ["Claude Code", "SDD", "Node.js"]
    },
    resumen: "[2–3 líneas: qué pipeline agéntico construiste, qué proceso automatiza y qué ganancia dio.]",
    highlights: [
      "[Logro medible 1: ej. de 6h de trabajo manual a 20min de pipeline.]",
      "[Logro medible 2: ej. specs versionadas y revisión humana en cada paso.]"
    ],
    reto: "[Qué proceso manual querías eliminar o escalar, y por qué era candidato a agentes.]",
    solucion: "[Spec → plan → agentes → review: cómo lo orquestaste y qué límites pusiste a cada agente.]",
    resultado: "[Tiempo ahorrado, calidad, trazabilidad, qué aprendiste del método.]"
  },
  {
    slug: "sitio-wordpress",
    title: "[título del sitio WordPress]",
    desc: "[1 línea: problema del cliente, tu solución, resultado.]",
    tags: ["wordpress", "performance"],
    cat: "web",
    img: "assets/projects/proyecto3.webp",
    demo: "#", repo: null, video: null,
    meta: {
      rol: "[rol: desarrollo y optimización]",
      periodo: "[2023]",
      stack: ["WordPress", "PHP", "Redis"]
    },
    resumen: "[2–3 líneas: el estado inicial del sitio, lo que implementaste y el resultado.]",
    highlights: [
      "[Logro medible 1: ej. LCP de 4.2s a 1.3s.]",
      "[Logro medible 2: ej. Lighthouse 92 → 98.]"
    ],
    reto: "[Sitio lento, plugins heredados, deuda técnica: qué encontraste al llegar.]",
    solucion: "[Auditoría, plan de optimización, qué tocaste y en qué orden.]",
    resultado: "[Métricas antes/después y qué quedó documentado para mantenimiento.]"
  },
  {
    slug: "api-laravel",
    title: "[API en Laravel]",
    desc: "[1 línea: qué expone, integraciones, volumen/uptime si aplica.]",
    tags: ["laravel", "api-rest", "mysql"],
    cat: "web",
    img: "assets/projects/proyecto4.webp",
    demo: null, repo: "#", video: null,
    meta: {
      rol: "[rol: diseño y desarrollo backend]",
      periodo: "[2024]",
      stack: ["Laravel", "MySQL", "Docker"]
    },
    resumen: "[2–3 líneas: qué endpoints expone, qué sistemas integra y bajo qué volumen.]",
    highlights: [
      "[Logro medible 1: ej. p95 < 200ms con X req/min.]",
      "[Logro medible 2: ej. contratos OpenAPI versionados y testados.]"
    ],
    reto: "[Integración entre sistemas dispares, contratos de datos, versionado.]",
    solucion: "[Diseño de la API, autenticación, testing, CI, documentación.]",
    resultado: "[Adopción por otros equipos, estabilidad, qué se simplificó.]"
  },
  {
    slug: "ia-web",
    title: "[nombre del proyecto IA + web]",
    desc: "[1 línea: pipeline agéntico aplicado a un caso real de producto web.]",
    tags: ["ia", "laravel", "sdd"],
    cat: "ia",
    img: "assets/projects/proyecto6.webp",
    demo: "#", repo: "#", video: null,
    meta: {
      rol: "[rol: arquitectura IA + desarrollo web]",
      periodo: "[2025 — 2026]",
      stack: ["Laravel", "Agentes", "SDD"]
    },
    resumen: "[2–3 líneas: qué producto web se beneficia del pipeline y qué parte del ciclo automatiza.]",
    highlights: [
      "[Logro medible 1: ej. contenido/categorización generada con validación humana previa a publicar.]",
      "[Logro medible 2: ej. trazabilidad total spec → PR.]"
    ],
    reto: "[Escalar una operación web (contenido, QA, migraciones) sin aumentar el equipo.]",
    solucion: "[Qué agentes intervinieron, qué validación humana y qué tests cubrieron el resultado.]",
    resultado: "[Volumen procesado, errores evitados, tiempo ahorrado.]"
  }
];