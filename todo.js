const todoForm = document.querySelector(".js-todoForm");
const toDoInput = todoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function addToDo(text) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  deleteButton.innerText = "완료";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  addToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(toDo => {
      addToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
