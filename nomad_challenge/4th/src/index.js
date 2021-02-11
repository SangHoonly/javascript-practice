// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const background = document.querySelector("body");

window.addEventListener("resize", () => {
  if (window.innerWidth < 500) {
    background.style.background = "blue";
  }
  if (window.innerWidth >= 500 && window.innerWidth < 700) {
    background.style.background = "purple";
  }
  if (window.innerWidth >= 700) {
    background.style.background = "yellow";
  }
});
