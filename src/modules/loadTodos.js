import defaultTodoTemplate from "./defaultTodoTemplate";
import loadContent from "./loadContent";
import findSelectedProject from "./findSelectedProject";
import sortTodosByPriority from "./sortTodosByPriority";
import sortByDueDate from "./sortTodosByDueDate";

function loadTodos () {

    let todoCounter = 1; //for counting and naming purposes

    loadContent(defaultProject);

    //functions
    
    function createNewTodo (project) {

        todoCounter += 1;
        let newTodoName = 'todo' + todoCounter;
        const newTodo = defaultTodo(newTodoName);
        newTodo.element.id = newTodoName;
        project.todoList.push(newTodo);
        loadContent(project);
    }

    function defaultTodo (newTodoName) {
        const element = defaultTodoTemplate(newTodoName);
        const newTodo = new Todo('', '', null, null, element);
        return newTodo;
    }

    //listeners

    document.querySelector('.addTodo').addEventListener('click', () => {
        try {
            createNewTodo(findSelectedProject());
        }
        catch {
            console.log('No projects to add to.')
        }
    });
}

export default loadTodos;