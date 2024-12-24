import { createToDo, createToDoList} from "./index.js";

gettingGroceries = createToDo("Groceries", "milk, eggs, and bread","12-25-25")
takeOutTrash = createToDo("Trash", "Take out three bags of trash","12-26-25")

DecTDL = createToDoList()
DecTDL.addTask(gettingGroceries)
takeOutTrash.setPriority(1)
DecTDL.addTask(takeOutTrash)
DecTDL.displayList()