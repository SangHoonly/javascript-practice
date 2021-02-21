const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveNameToStorage(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  showGreeting(currentValue);
  saveNameToStorage(currentValue);
  input.value = '';
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function showGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.classList.add('showing-animation');

  greeting.innerText = `Hello ${text}.`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === "") {
    askForName();
    return;
  }
  showGreeting(currentUser);
}

function init() {
  localStorage.setItem(USER_LS, "");
  loadName();
}

init();
