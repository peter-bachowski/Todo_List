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
        const newTodoDiv = cloneDefaultTodo(newTodoName);
        let newTodoObject = new Todo(newTodoName, defaultTodoList.description, defaultTodoList.dueDate, defaultTodoList.priority, defaultTodoTemplate());
        newTodoDiv.element.id = newTodoName;
        project.todoList.push(newTodoDiv);
        project.todoList.push(newTodoObject);
        loadContent(project);
    }

    function cloneDefaultTodo (newTodoName) {
        const element = defaultTodoTemplate();
        const newTodo = new Todo(newTodoName, defaultTodo.description, defaultTodo.dueDate, defaultTodo.priority, element);
        return newTodo;
    }

    //listeners

    document.querySelector('.addTodo').addEventListener('click', () => {
        createNewTodo(findSelectedProject());
    });

}

export default loadTodos;