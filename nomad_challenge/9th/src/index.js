// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function numberChange(number) {
  number = parseInt(number);
  const presentNumber = parseInt(
    document.getElementById("resultNumber").innerText
  );
  if (!calculated) {
    const changed = 10 * presentNumber + number;
    document.getElementById("resultNumber").innerText = changed;
    return changed;
  }
}

function calculate(newButtonClicked) {
  const presentNumber = parseInt(
    document.getElementById("resultNumber").innerText
  );

  if (clickedOperator === "+") {
    const result = restored + presentNumber;
    document.getElementById("resultNumber").innerText = result;
    restored = result;
  }

  if (clickedOperator === "-") {
    const result = restored - presentNumber;
    document.getElementById("resultNumber").innerText = result;
    restored = result;
  }

  if (clickedOperator === "*") {
    const result = restored * presentNumber;
    document.getElementById("resultNumber").innerText = result;
    restored = result;
  }

  if (clickedOperator === "/") {
    const result = restored / presentNumber;
    document.getElementById("resultNumber").innerText = result;
    restored = result;
  }

  calculated = true;

  if (newButtonClicked === "=") {
    clickedOperator = false;
  }
  clickedOperator = newButtonClicked;
}

function handleNumberClick(event) {
  if (!clickedOperator) {
    numberChange(event.target.value);
    calculated = false;
    return;
  }

  if (!restored) {
    restored = parseInt(document.getElementById("resultNumber").innerText);
    document.getElementById("resultNumber").innerText = event.target.value;
    calculated = false;
    return;
  }

  numberChange(event.target.value);
  calculated = false;
}

function handleOperatorClick(event) {
  const newButtonClicked = event.target.value;

  if (clickedOperator) {
    calculate(newButtonClicked);
    restored = false;
    return;
  }
  clickedOperator = newButtonClicked;
  calculated = false;
}

let resultNumber = document.getElementById("resultNumber").innerText;
let clickedOperator = false;
let restored = false;
let calculated = false;

const numberButtonContainer = document.getElementById("numberButtonContainer");
const operatorButtonContainer = document.getElementById(
  "operatorButtonContainer"
);

const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
  const numberButton = document.createElement("button");
  numberButton.value = number;
  numberButton.innerText = number;
  numberButton.className = "button";
  numberButton.addEventListener("click", handleNumberClick);
  numberButtonContainer.appendChild(numberButton);
  return numberButton;
});

const operatorButtons = ["+", "-", "*", "/"].map((operator) => {
  const operatorButton = document.createElement("button");
  operatorButton.value = operator;
  operatorButton.innerText = operator;
  operatorButton.className = "button";
  operatorButton.addEventListener("click", handleOperatorClick);
  operatorButtonContainer.appendChild(operatorButton);
  return operatorButton;
});

const equalButton = document.createElement("button");
equalButton.value = "=";
equalButton.innerText = "=";
equalButton.className = "button";
equalButton.addEventListener("click", handleOperatorClick);
numberButtonContainer.appendChild(equalButton);

const resetButton = document.getElementById("resetButtonContainer");
resetButton.innerText = "C";
resetButton.className = "button";
resetButton.addEventListener("click", () => {
  clickedOperator = false;
  restored = false;
  calculated = false;
  document.getElementById("resultNumber").innerText = 0;
});
