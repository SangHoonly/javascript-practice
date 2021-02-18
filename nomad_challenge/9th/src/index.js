// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let resultNumber = document.getElementById("resultNumber");

function handleNumberClick(event) {
  document.getElementById("resultNumber").innerText = event.target.value;
}
