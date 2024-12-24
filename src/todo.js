const createToDo = function(title, description, dueDate){
    let priority = 0
    let checked = false
    const changeCheck = () => {
        checked = !checked
    }
    const getCheck = () => checked
    const setPriority = function(priorityValue){
        priority = priorityValue
    }
    const getPriority = () => {
        return priority
    }
    
    return {title, description, dueDate, getCheck, changeCheck, setPriority, getPriority}
}

const createToDoList = () => {
    let tasks = []
    const addTask = function(task){
        task.setPriority(tasks.length + 1) 
        tasks.push(task)
    }
    const deleteTask = function(title){
        tasks = tasks.filter(task => task.title !== title)
    }
    const sortTasksByPriority = () => {
        tasks.sort((a, b) => a.getPriority() - b.getPriority())
    }
    const displayList = () => {
        tasks.forEach(task => {
            console.log(task.title);
            console.log(task.getPriority());
        });
    }
    return {addTask, deleteTask, sortTasksByPriority, displayList}
}

export{createToDo,createToDoList}