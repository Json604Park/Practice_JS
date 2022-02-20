const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveTodos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodoList(todoItem) {
  const li = document.createElement("li");
  li.id = todoItem.id;
  const span = document.createElement("span");
  span.innerText = todoItem.text;
  const button = document.createElement("button");

  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function onHandleToDoForm(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = { text: newTodo, id: Date.now() };
  toDos.push(newTodoObj);
  paintTodoList(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", onHandleToDoForm);

const savedToDos = localStorage.getItem("toDos");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodoList);
}
