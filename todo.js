const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".toDoList"),
  compToDoList = document.querySelector(".compToDoList");

const TODOS_LS = "toDos";
const COMP_LS = "completed";

let toDos = [];
let compToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveCompToDos() {
  localStorage.setItem(COMP_LS, JSON.stringify(compToDos));
}

function returnToDo(event) {
  const returnLi = event.target.parentNode;
  const toDoItem = returnLi.querySelector("span").innerText;
  deleteCompToDo(event);
  printToDo(toDoItem);
}

function goToCompleted(event) {
  const completedLi = event.target.parentNode;
  const toDoItem = completedLi.querySelector("span").innerText;
  deleteToDo(event);
  printCompToDo(toDoItem);
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDo;
  saveToDos();
}

function deleteCompToDo(event) {
  const li = event.target.parentNode;
  compToDoList.removeChild(li);
  const cleanCompToDo = compToDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  compToDos = cleanCompToDo;
  saveCompToDos();
}

function printToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const compBtn = document.createElement("button");
  const newId = Math.floor(Math.random() * 999999999);
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  compBtn.innerText = "✔";
  compBtn.addEventListener("click", goToCompleted);
  li.appendChild(compBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function printCompToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const returnBtn = document.createElement("button");
  const newId = Math.floor(Math.random() * 999999999);
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", deleteCompToDo);
  span.innerText = text;
  returnBtn.innerText = "➰";
  returnBtn.addEventListener("click", returnToDo);
  li.appendChild(returnBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  compToDoList.appendChild(li);
  const compToDoObj = {
    text: text,
    id: newId,
  };
  compToDos.push(compToDoObj);
  saveCompToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  printToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      printToDo(toDo.text);
    });
  }
}

function loadCompleted() {
  const loadedCompToDos = localStorage.getItem(COMP_LS);
  if (loadedCompToDos !== null) {
    const parsedCompToDos = JSON.parse(loadedCompToDos);
    parsedCompToDos.forEach(function (toDo) {
      printCompToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  loadCompleted();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
