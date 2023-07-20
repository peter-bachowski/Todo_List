import defaultTodoTemplate from "./defaultTodoTemplate";

function formatContentArea () {
    const contentArea = document.querySelector('.contentArea');
    const todoContent = document.createElement('div');
    const addBtnContainer = document.createElement('div');
    const addTodo = document.createElement('button');

    addBtnContainer.classList.add('addBtnContainer');
    todoContent.classList.add('todoContent');
    addTodo.classList.add('addTodo');

    contentArea.appendChild(addBtnContainer);
    addBtnContainer.appendChild(addTodo);
    addTodo.innerText = '+';
    contentArea.appendChild(todoContent);
}

export default formatContentArea;