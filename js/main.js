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
});
