document.addEventListener("DOMContentLoaded", () => {
  // Fade-in on scroll
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Simple parallax effect
  window.addEventListener("scroll", () => {
    document.querySelectorAll("[data-parallax]").forEach(el => {
      let speed = 0.3;
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
  });
});
