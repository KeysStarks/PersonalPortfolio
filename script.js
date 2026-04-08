const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("primary-menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
});