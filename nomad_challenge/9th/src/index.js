// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

function handleNumberClick(event) {
  // const number = parseInt(event.target.value);
  document.getElementById("resultNumber").innerText = event.target.value;
}

let resultNumber = document.getElementById("resultNumber").innerText;

const numberButtonContainer = document.getElementById("numberButtonContainer");
const numberButtons = [1,2,3,4,5,6,7,8,9,0].map((number) => {
  const numberButton = document.createElement("button");
  numberButton.value = number;
  numberButton.innerText = number;
  numberButton.addEventListener('click', handleNumberClick);
  numberButtonContainer.appendChild(numberButton);
  return numberButton;
});


