import loadContent from "./loadContent";

function sortTodoArray (deleteBtn) {
    const project = projectArray[0];
    const todoList = project.todoList;

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].element.id === deleteBtn.parentNode.id){
            todoList.splice(i,1);
            break;
        }
    }

    loadContent();
}

export default sortTodoArray;