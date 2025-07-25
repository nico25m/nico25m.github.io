document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");

    loader.style.display = "none";
    content.classList.remove("hidden");
  }, 2500);
