const burgerBtn = document.getElementById("burger-menu");
const burgerLines = document.getElementById("burger-menu--lines");
const nav = document.getElementById("main-nav");

burgerBtn.onclick = openMenu;

function openMenu() {
  burgerLines.classList.toggle("burger__line--open");
  nav.classList.toggle("main-nav--open");
}
