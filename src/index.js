import {createToDo, createToDoList} from "./todo.js"

document.getElementById('new-project-form').addEventListener("submit", function (e) {
    e.preventDefault();
    const projects = document.getElementById('Projects');
    
    const projTitle = document.getElementById('new-project').value;
    const titleElement = document.createElement('h2');
    titleElement.textContent = projTitle;
    
    const newTodo = document.createElement('form');
    newTodo.setAttribute("id", `todo-form-${projTitle}`);
    
    const formContainer = document.createElement('div');
    formContainer.appendChild(newTodo);

    projects.appendChild(titleElement);
    projects.appendChild(formContainer);
    
    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.name = 'todo';
    todoInput.placeholder = 'Enter a todo item';
    newTodo.appendChild(todoInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Todo';
    newTodo.appendChild(submitButton);

});


