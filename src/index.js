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
    
    const todoListInput = document.createElement('input');
    todoListInput.type = 'text';
    todoListInput.name = 'todo';
    todoListInput.placeholder = 'Enter a todo list title';
    newTodo.appendChild(todoListInput);

    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.name = 'todo';
    todoInput.placeholder = 'Enter a todo';
    
    const todoInputButton = document.createElement("button");
    todoInputButton.type = 'submit';
    todoInputButton.textContent = "Add Todo"

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add Todo List';

    
    submitButton.addEventListener("click", function (e){
        e.preventDefault();
        const newProjectForm = document.getElementById(`todo-form-${projTitle}`);
        newProjectForm.innerHTML = `${todoListInput.value} `;
        document.appendChild(todoInput);
        document.appendChild(todoInputButton);
        todoInputButton.addEventListener("submit", function(e){
            e.preventDefault()
            
        

    });
    newTodo.appendChild(submitButton);

});


