"use strict";
// console.log("hello world!");
//there is this thing called non null assertion which means that the value from the element should exit
// const btn = document.getElementById("clk")!; //ending with ! means that the btn element not should be null dont use it most of the time
// btn.addEventListener("click", () =>{
//     console.log("hello world!");
// });
//type assertion:
//example with it and without it and why use it
//example with type assertion:
// const btn = document.getElementById("clk");
// const input = document.getElementById("todo")! as HTMLInputElement;
// btn?.addEventListener("click", () => {
//     console.log(input.value);
// });
//-------------------------------------------------------------------------------------------
// Todo List mini project:
const btn = document.getElementById("btn");
const input = document.getElementById("todoText");
const form = document.querySelector("form"); // ! means that the form exists
const list = document.querySelector("#todoList");
const todos = [];
todos.forEach(createTodoElement);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) {
        return [];
    }
    ;
    console.log(JSON.parse(todosJSON));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
    createTodoElement(newTodo);
}
function createTodoElement(todo) {
    const newTodoText = todo.text;
    const newLI = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    newLI.textContent = newTodoText; // Use textContent to set the text content of the LI element
    newLI.append(checkBox);
    list === null || list === void 0 ? void 0 : list.appendChild(newLI); // Append the newLI to the list
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
