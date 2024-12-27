import {createToDo, createToDoList} from "./todo.js"
const new_proj = document.getElementById('new-project-form')
new_proj.addEventListener("submit", function(e){
    e.preventDefault();
    // getting project div and input value
    const projDiv = document.getElementById("Projects");
    const projTitle = document.getElementById("new-project").value
    
    //creating new Project with project name in h2, setting value received in input to
    //  projTitleElement, appending to the document
    const projTitleElement = document.createElement("h2")
    projTitleElement.textContent = projTitle

    //creating a new form, making it's id 
    // into the same as project title
    const projForm = document.createElement("form")
    projForm.setAttribute("id",`new-project-${projTitle}`)

    //creating a todoList input with proper details
    const todoListInput = document.createElement("input");
    todoListInput.type = "text";
    todoListInput.placeholder = "Enter Todo List Name"

    //creating a todoList button with proper details
    const todoListButton = document.createElement("button");
    todoListButton.textContent = 'add Todo'

    //appending button and input to project form
    projForm.appendChild(todoListInput)
    projForm.appendChild(todoListButton)

    //creating new container for project form
    const projFormContainer = document.createElement("div")
    projFormContainer.appendChild(projForm)

    //appending form container and title to project div
    projDiv.appendChild(projTitleElement)
    projDiv.appendChild(projFormContainer)
    
    //creating event for creating todolists in the project form
    projForm.addEventListener("submit", function (e){
        e.preventDefault();
        
        const todoListName = todoListInput.value.trim();
        if (!todoListName) return; // Ensure list name isn't empty

        console.log(`Creating Todo List: ${todoListName}`);

        // Create a new todo list with the name provided
        const todoList = createToDoList(todoListName);
        
        // Create a div to represent the todo list in the UI
        const todoDiv = document.createElement("ol");
        todoDiv.textContent = `TDL - ${todoListName}`; // Display the list name
        projDiv.appendChild(todoDiv);

        // Log the todoList object for debugging
        console.log(todoList);

})
})

