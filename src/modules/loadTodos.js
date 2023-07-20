import defaultTodoTemplate from "./defaultTodoTemplate";
import formatContentArea from "./formatContentArea";

function loadTodos () {

    const defaultTodo = defaultTodoTemplate();
    let defaultTodoList = [];
    let todoCounter = 1;

    defaultTodo.id = 'todo' + todoCounter;
    defaultTodoList.push(defaultTodo);

    formatContentArea();
    document.querySelector('.todoContent').appendChild(defaultTodo);

    //functions
    
    function createNewTodo () {
        todoCounter += 1;
        const newTodo = defaultTodoTemplate();
        newTodo.id = 'todo' + todoCounter;
        defaultTodoList.push(newTodo);
        document.querySelector('.todoContent').appendChild(newTodo);
        console.log(defaultTodoList);
    }

    //listeners

    document.querySelector('.addTodo').addEventListener('click', createNewTodo);

}

export default loadTodos;