const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

//Gets the todoS locally stored value
/* 
supplementary instruction:
localStorage.getItem(key): Get locally stored value of key
localStorage.setItem(key):store the value in the key field
localStorage.removeItem(key): remove the value of key
*/

/* 将addtodo中的例子遍历后存储在本地 */
const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  //the e stand for window.event
  e.preventDefault(); //This  attribute control default action
  // if whitout this attribute ,the refresh button will filcker
  //other: When we use 'addEventListener' ,it has a attribute is true/false ,it will accept web default events.
  addTodo();
});
function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener("click", () => {
      //toggle: add html/css
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", (e) => {
      //The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosUL.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li"); //all
  const todos = [];
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
