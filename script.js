const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) root.dataset.theme = savedTheme;
themeToggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  if (next === "light") delete root.dataset.theme;
  else root.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
