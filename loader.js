document.addEventListener("DOMContentLoaded", function () {
  // Dopo 3 secondi, nasconde il loader e mostra il contenuto
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");

    loader.style.display = "none";
    content.style.display = "block";
  }, 3000);
});
