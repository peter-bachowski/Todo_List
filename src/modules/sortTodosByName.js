import findSelectedProject from "./findSelectedProject";
import loadContent from "./loadContent";

function sortTodosByName () {
    const project = findSelectedProject();
    const todoList = project.todoList;
    todoList.sort(function(a,b){
        const name1 = a.name;
        const name2 = b.name;
        if (name1 > name2) {
            return 1;
        }
        if (name1 < name2) {
            return -1;
        }
        return 0;
    });
    loadContent(project);
}

export default sortTodosByName;