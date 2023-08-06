import findSelectedProject from "./findSelectedProject";

function findSelectedTodo (project, element) {
    const project = findSelectedProject();
    const todoList = project.todoList;

    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i]
        if (todo.name === element.id) {
            return todo;
        }
    }
    return '';
}

export default findSelectedTodo;