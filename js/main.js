console.log("✅ JS loaded successfully");
document.addEventListener("DOMContentLoaded", () => {
  /* === THEME TOGGLE === */
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark-mode");
    });
  }

  /* === AUTO YEAR === */
  const currentYear = new Date().getFullYear();
  document.querySelectorAll(".auto-year").forEach(el => (el.textContent = currentYear));

  /* === REVEAL ON SCROLL === */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  /* === MOBILE MENU TOGGLE === */
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      console.log("☰ clicked!");
      nav.classList.toggle("show");
      toggle.classList.toggle("active"); // Add pulse animation
    });

    // Close menu when a link is clicked (for better UX on mobile)
    nav.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        nav.classList.remove("show");
        toggle.classList.remove("active");
      })
    );
  }
});
