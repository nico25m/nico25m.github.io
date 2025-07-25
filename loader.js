document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 3000);
});
