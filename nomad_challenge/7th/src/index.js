// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector("form");
const input = document.querySelector("input");
const pendingList = document.querySelector(".pendingList");
const finishedList = document.querySelector(".finishedList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pendingToDos = [];
let finishedToDos = [];

function deleteToDo(event, todos) {
  const button = event.target;
  const li = button.parentNode;
  li.parentNode.removeChild(li);
  const cleanToDos = todos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  if (todos === pendingToDos) {
    pendingToDos = cleanToDos;
    saveToDos(pendingToDos, finishedToDos);
  } else {
    finishedToDos = cleanToDos;
    saveToDos(pendingToDos, finishedToDos);
  }
}

function handleReplayToDo(event, text) {
  const button = event.target;
  const li = button.parentNode;
  finishedList.removeChild(li);
  const cleanToDos = finishedToDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  finishedToDos = cleanToDos;
  pendingToDos.push({ text, id: parseInt(li.id) });

  const deleteButton = document.createElement("button");
  const finishedButton = document.createElement("button");
  deleteButton.innerText = "❌";
  finishedButton.innerText = "✅";
  deleteButton.addEventListener("click", (event) => {
    deleteToDo(event, pendingToDos);
  });
  finishedButton.addEventListener("click", (event) => {
    finishToDo(event, text);
  });
  li.removeChild(button.previousSibling);
  li.removeChild(button);
  li.appendChild(deleteButton);
  li.appendChild(finishedButton);
  pendingList.appendChild(li);
  saveToDos(pendingToDos, finishedToDos);
}

function finishToDo(event, text) {
  const button = event.target;
  const li = button.parentNode;
  pendingList.removeChild(li);
  const cleanToDos = pendingToDos.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  pendingToDos = cleanToDos;
  finishedToDos.push({ text, id: parseInt(li.id) });

  const deleteButton = document.createElement("button");
  const replayButton = document.createElement("button");
  deleteButton.innerText = "❌";
  replayButton.innerText = "⏪";
  deleteButton.addEventListener("click", (event) => {
    deleteToDo(event, finishedToDos);
  });
  replayButton.addEventListener("click", (event) => {
    handleReplayToDo(event, text);
  });

  li.removeChild(button.previousSibling);
  li.removeChild(button);
  li.appendChild(deleteButton);
  li.appendChild(replayButton);
  finishedList.appendChild(li);
  saveToDos(pendingToDos, finishedToDos);
}

function saveToDos(pendingToDos, finishedToDos) {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingToDos));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedToDos));
}

function addToDo(text) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  const finishedButton = document.createElement("button");
  const span = document.createElement("span");
  const newId = pendingToDos.length + 1;
  deleteButton.innerText = "❌";
  finishedButton.innerText = "✅";
  deleteButton.addEventListener("click", (event) => {
    deleteToDo(event, pendingToDos);
  });
  finishedButton.addEventListener("click", (event) => {
    finishToDo(event, text);
  });
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(finishedButton);
  li.id = newId;
  pendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  pendingToDos.push(toDoObj);
  saveToDos(pendingToDos, finishedToDos);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  addToDo(currentValue);
  input.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(PENDING_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => {
      addToDo(toDo.text);
    });
  }
}

function init() {
  // localStorage.clear();
  loadToDos();
  form.addEventListener("submit", handleSubmit);
}

init();
