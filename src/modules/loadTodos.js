import projectCounter from "./projectCounter";

function loadTodos (project) {
    const contentArea = document.querySelector('.contentArea');
    const todo = document.createElement('div');
    const addBtnContainer = document.createElement('div');
    const addNewTodo = document.createElement('button');
    const todoContent = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const todoHeader = document.createElement('div');

    let todoList = [];
    let todoNumber = 1;

    addBtnContainer.classList.add('addBtnContainer');
    todo.classList.add('todo');
    addNewTodo.classList.add('addNewTodo');
    todoContent.classList.add('todoContent');
    todoHeader.classList.add('todoHeader');
    deleteBtn.classList.add('deleteBtn');

    contentArea.appendChild(addBtnContainer);
    contentArea.appendChild(todoContent);
    addBtnContainer.appendChild(addNewTodo);
    todoContent.appendChild(todo);
    todo.appendChild(todoHeader);
    todo.appendChild(deleteBtn);

    todoList.push(todo);
    
    addNewTodo.innerText = '+';
    todoHeader.innerText = '1';
    deleteBtn.innerText = 'Delete';
    
    function createNewTodo () {
        todoNumber += 1;
        const newTodo = document.querySelector('.todo').cloneNode(true);
        newTodo.firstChild.innerText = todoNumber;
        todoList.push(newTodo);
        todoContent.appendChild(newTodo);
    }

    addNewTodo.addEventListener('click', createNewTodo);
}

export default loadTodos;