const DARK_MODE = document.getElementById("darkmode");
const DARK_MODE_SM = document.getElementById("darkmode--sm");
const HTML = document.querySelector("html");

DARK_MODE.addEventListener("click", darkMode);
DARK_MODE_SM.addEventListener("click", darkMode);

function darkMode() {
  HTML.classList.toggle("dark");
}
