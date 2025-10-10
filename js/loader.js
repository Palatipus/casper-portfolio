document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html").then(r=>r.text()).then(t=>{ const header = document.querySelector("header"); if(header) header.innerHTML = t; });
  fetch("footer.html").then(r=>r.text()).then(t=>{ const footer = document.querySelector("footer"); if(footer) footer.innerHTML = t; });
});
