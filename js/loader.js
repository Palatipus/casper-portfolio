document.addEventListener("DOMContentLoaded", () => {
  // Load header, then wire up hamburger once it's in the DOM
  fetch("header.html")
    .then(r => r.text())
    .then(t => {
      const header = document.querySelector("header");
      if (header) {
        header.innerHTML = t;
        initHamburger();
      }
    });

  // Load footer
  fetch("footer.html")
    .then(r => r.text())
    .then(t => {
      const footer = document.querySelector("footer");
      if (footer) footer.innerHTML = t;
    });
});

function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
    document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
  });

  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}
