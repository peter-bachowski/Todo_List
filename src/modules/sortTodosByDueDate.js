import findSelectedProject from "./findSelectedProject";
import loadContent from "./loadContent";

function sortTodosByDueDate () {
    const project = findSelectedProject();
    const todoList = project.todoList;
    todoList.sort(function(a,b){
        return Date.parse(a.dueDate) - Date.parse(b.dueDate);
    });
    loadContent(project);
}

export default sortTodosByDueDate;