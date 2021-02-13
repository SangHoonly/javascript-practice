// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectCountry = document.querySelector("select");
// console.log(selectBox.innerHTML);

selectCountry.addEventListener("change", (event) => {
  const country = event.target.value;
  localStorage.setItem("country", country);
});
