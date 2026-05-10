const projects = [
  { href: "https://ai-podcast-generator-9ai4.onrender.com/", img: "images/pdf-organizer.png", alt: "PDF Organizer"},
  { href: "https://ai-podcast-generator-9ai4.onrender.com/", img: "images/ai-podcast-generator.png", alt: "AI Podcast Generator" },
  { href: "https://ai-text-summarizer-w9xe.onrender.com", img: "images/ai-text-summarizer.png", alt: "AI Text Summarizer" },
  { href: "https://chat-app-xz4i.onrender.com", img: "images/chat-app.png", alt: "Chat App" },
  { href: "https://file-uploader-production-155a.up.railway.app/", img: "images/file-uploader.png", alt: "File Uploader" },
  { href: "https://members-only-production-930c.up.railway.app/login", img: "images/secret-clubhouse-logo.png", alt: "Secret Clubhouse" },
  { href: "https://inventory-app-1-ketf.onrender.com", img: "images/inventory-logo.png", alt: "Inventory" },
  { href: "https://mini-message-board-fx7f.onrender.com", img: "images/message-board-logo.png", alt: "Message Board" },
  { href: "https://battleship-application.netlify.app/", img: "images/battleship-logo.png", alt: "Battleship" },
  { href: "https://memory-game-site-application.netlify.app/", img: "images/memory-game-logo.png", alt: "Memory Game" },
  { href: "https://weather-finder-project.netlify.app/", img: "images/weather-app-logo.png", alt: "Weather App" },
  { href: "https://lionelp1.github.io/Connect-Four/", img: "images/connect-four-logo.png", alt: "Connect Four" },
  { href: "https://lionelp1.github.io/tic-tac-toe/", img: "images/Tic-Tac-Toe-Logo.png", alt: "Tic Tac Toe" },
  { href: "https://lionelp1.github.io/Click-Counter/", img: "images/Click-Speed-Logo.png", alt: "Click Counter" },
  { href: "https://lionelp1.github.io/library-project/", img: "images/Library-Logo.png", alt: "Library" },
  { href: "https://lionelp1.github.io/Word-Counter/", img: "images/Word-Counter.png", alt: "Word Counter" },
  { href: "https://lionelp1.github.io/Sketch-Pad/", img: "images/Sketch-Pad-Logo.png", alt: "Sketch Pad" },
];

const container = document.querySelector(".project-container");

projects.forEach(p => {
  container.insertAdjacentHTML('beforeend', `
    <a href="${p.href}" class="project" target="_blank">
      <img class="images" src="${p.img}" alt="${p.alt}">
    </a>
  `);
});