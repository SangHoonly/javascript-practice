// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function handleRangeChange(event) {
  event.preventDefault();
  rangeValue = event.target.value;
  numberRangeTitle.innerText = `Generate a number between 0 and ${rangeValue}`;
}

const numberRangeTitle = document.getElementById("number-range");
const button = document.querySelector("button");
let rangeValue = document.getElementById("range-value").value;

numberRangeTitle.innerText = `Generate a number between 0 and ${rangeValue}`;
button.addEventListener("click", () => {
  const guessedNumber = parseInt(
    document.getElementById("guessedNumber").value
  );
  const randomNumber = ((max) => {
    max = parseInt(max);
    return Math.floor(Math.random() * (max + 1));
  })(rangeValue);

  document.querySelector(
    "p"
  ).innerText = `You chose: ${guessedNumber}, the machine chose: ${randomNumber}.`;
  if (guessedNumber === randomNumber) {
    document.querySelector("h3").innerText = "You Win!";
    return;
  }
  document.querySelector("h3").innerText = "You Lost!";
});

document
  .getElementById("range-value")
  .addEventListener("input", handleRangeChange);
