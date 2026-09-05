/* assets/projects/data.js — fuente única de datos del portfolio (index + fichas). */
window.PROJECTS = [
  {
    slug: "the-last-masterpiece",
    title: "The Last Masterpiece",
    desc: "Videojuego de gamejam con un desafío de diseño puro: que mover la escenografía sea simple y divertido.",
    tags: ["unity", "game design", "gamejam"],
    cat: "games",
    img: "assets/projects/last-masterpiece.webp",
    img_ficha: "assets/projects/last-masterpiece-ficha.webp",
    demo: "https://lucastaborda.itch.io/the-last-masteripece", repo: null, video: null,
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
    solucion: "Prototipado rápido en Unity con iteración corta: cada movimiento del escenario responde de forma visible e inmediata, y los niveles se construyen como lecciones — una idea nueva por nivel, dominada antes de pasar a la siguiente."
  },
  {
    slug: "multifilo",
    title: "Multifilo",
    desc: "Sistema Drupal institucional para la Facultad de Filosofía y Letras: integración de módulos, temas propios y Docker.",
    tags: ["drupal", "docker", "php"],
    cat: "web",
    img: "assets/projects/multifilo.webp",
    img_ficha: "assets/projects/multifilo-ficha.webp",
    demo: "https://filo.uba.ar", repo: null, video: null,
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
    solucion: "Arquitectura Drupal gestionada con Composer, configuración versionada, temas custom y contenedores Docker para web y base de datos. Cada módulo entra por una necesidad concreta y queda documentado su rol dentro del sistema."
  },
  {
    slug: "metacloud",
    title: "Metacloud",
    desc: "Metaverso para WebGL: performance en el navegador con muchas personas conectadas a la vez y modelos 3D GLTF animados en tiempo real.",
    tags: ["unity", "webgl", "gltf"],
    cat: "games",
    img: "assets/projects/metacloud.webp",
    img_ficha: "assets/projects/metacloud-ficha.webp",
    demo: null, repo: null, video: null,
    meta: {
      rol: "Unity Developer",
      periodo: "[fecha — Agency Coda]",
      stack: ["Unity", "C#", "WebGL", "GLTF"]
    },
    resumen: "Metaverso desarrollado para la plataforma WebGL: un mundo 3D compartido donde muchos usuarios navegan simultáneamente desde el navegador. Todo el peso recae en el cliente — rendering, red y carga de contenido — dentro del presupuesto de rendimiento de un tab de Chrome.",
    highlights: [
      "Performance sostenida en navegador con muchas personas conectadas al mismo tiempo.",
      "Carga de modelos 3D externos en formato GLTF, riggeados y animables desde Unity.",
      "Animaciones en runtime vía máquina de estados propia, tipo Mechanim."
    ],
    reto: "Dos frentes duros a la vez: mantener una buena performance en el navegador con muchas personas conectadas simultáneamente — donde cada entidad remota consume draw calls, memoria y ancho de banda — y lograr cargar modelos 3D en GLTF fuera del build y animarlos en tiempo real, algo que Unity/WebGL no soporta de fábrica.",
    solucion: "Optimización agresiva de rendering (batching, LOD, control estricto de draw calls y memoria para sostener FPS estables) y un pipeline de contenido GLTF: módulo de carga asíncrona de assets externos —riggeados y animables— vía plugin GLTF compatible con URP, más una máquina de estados tipo Mechanim para aplicar animaciones en runtime."
  }
];