import loadContent from "./loadContent";

function sortTodoArray (deleteBtn) {
    const project = projectArray[0];
    const todoList = project.todoList;

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].element.id === deleteBtn.parentNode.id){ //looks for the id of the parent node of the delete button in the todo list array
            todoList.splice(i,1); //removes the selected object from the array
            break;
        }
    }
    loadContent(); //reloads the todos after the array has been sorted
}

export default sortTodoArray;