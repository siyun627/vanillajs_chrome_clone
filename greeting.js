const form = document.querySelector(".greetingForm"),
  input = document.querySelector(".nameInput"),
  greeting = document.querySelector(".greeting");

const USERNAME = "username",
  SHOWING_UN = "showing";

function saveName(text) {
  localStorage.setItem(USERNAME, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_UN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_UN);
  greeting.classList.add(SHOWING_UN);
  greeting.innerText = `환영합니다 ${text}님`;
  paintToDoList();
}

function paintToDoList() {
  const toDo = document.querySelector(".toDo");
  const toDoForm = document.querySelector(".toDoForm");
  toDo.classList.remove("unshown");
  toDoForm.classList.remove("unshown");
}

function loadName() {
  const loadedName = localStorage.getItem(USERNAME);
  if (loadedName === null) {
    askForName();
  } else {
    paintGreeting(loadedName);
  }
}

function init() {
  loadName();
}

init();
