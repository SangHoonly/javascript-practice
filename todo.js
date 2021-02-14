const todoForm = document.querySelector(".js-todoForm");
const toDoInput = todoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function addToDo(text) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  const span = document.createElement("span");
  deleteButton.innerText = "완료";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  addToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
