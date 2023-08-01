import findSelectedProject from "./findSelectedProject";
import loadContent from "./loadContent";

function sortTodosByPriority () {
    const selectedProject = findSelectedProject();
    let sortedTodoList = [];
    
    sort(null);
    sort('High');
    sort('Medium');
    sort('Low');

    selectedProject.todoList = sortedTodoList;
    loadContent(selectedProject);

    function sort (priority) {
        for (let i = 0; i < selectedProject.todoList.length; i++){ //sorts todos with no priority first
            let todo = selectedProject.todoList[i];
            if(todo.priority === priority) {
                sortedTodoList.push(todo);
            }
        } 
    }
}

export default sortTodosByPriority;