document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  }, 3000); 
});
