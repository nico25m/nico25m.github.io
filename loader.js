document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");

    // Nasconde loader, mostra contenuto
    loader.style.display = "none";
    content.classList.remove("hidden");
  }, 3000); // 3 secondi
});
