window.addEventListener('load', function () {
  // Appena tutto è caricato, attendi 0.5s e poi rimuovi il loader
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");
    if (loader && content) {
      loader.style.display = "none";
      content.classList.remove("hidden");
    }
  }, 500); // attesa breve per una transizione fluida
});
