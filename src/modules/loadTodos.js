import defaultTodoTemplate from "./defaultTodoTemplate";
import loadContent from "./loadContent";
import findSelectedProject from "./findSelectedProject";

function loadTodos () {

    let todoCounter = 1; //for counting and naming purposes

    loadContent(defaultProject);

    //functions
    
    function createNewTodo (project) {

        todoCounter += 1;
        let newTodoName = 'todo' + todoCounter;
        const newTodo = defaultTodo();
        newTodo.element.id = newTodoName;
        project.todoList.push(newTodo);
        loadContent(project);
    }

    function defaultTodo () {
        const element = defaultTodoTemplate();
        const newTodo = new Todo('', '', 'July 23', 'High', element);
        return newTodo;
    }

    //listeners

    document.querySelector('.addTodo').addEventListener('click', () => {
        try {
            createNewTodo(findSelectedProject());
        }
        catch {
            console.log('Cannot add to empty project')
        }
    });

}

export default loadTodos;