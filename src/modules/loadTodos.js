import defaultTodoTemplate from "./defaultTodoTemplate";
import formatContentArea from "./formatContentArea";
import loadContent from "./loadContent";

function loadTodos () {

    formatContentArea();

    let todoCounter = 1; //for counting and naming purposes

    loadContent();

    //functions
    
    function createNewTodo () {
        todoCounter += 1;
        const newTodo = cloneDefaultTodo();
        newTodo.element.id = 'todo' + todoCounter;
        projectArray[0].todoList.push(newTodo);
        loadContent();
    }

    function cloneDefaultTodo () {
        const element = defaultTodoTemplate();
        const newTodo = new Todo(defaultTodo.name, defaultTodo.description, defaultTodo.dueDate, defaultTodo.priority, element);
        return newTodo;
    }

    //listeners

    document.querySelector('.addTodo').addEventListener('click', createNewTodo);

}

export default loadTodos;