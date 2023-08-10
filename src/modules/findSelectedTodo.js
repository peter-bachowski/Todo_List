import findSelectedProject from "./findSelectedProject";

function findSelectedTodo (project, element) {
    const todoList = project.todoList;

    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i]
        if (todo.element.id === element.id) {
            return todo;
        }
    }
    return '';
}

export default findSelectedTodo;