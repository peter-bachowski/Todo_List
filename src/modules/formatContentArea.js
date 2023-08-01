import defaultTodoTemplate from "./defaultTodoTemplate";

function formatContentArea () {
    const contentArea = document.querySelector('.contentArea');
    const todoContent = document.createElement('div');
    const addBtnContainer = document.createElement('div');
    const addTodo = document.createElement('button');
    const sortByPriorityBtn = document.createElement('button');

    addBtnContainer.classList.add('addBtnContainer');
    todoContent.classList.add('todoContent');
    addTodo.classList.add('addTodo');
    sortByPriorityBtn.classList.add('sortByPriorityBtn');

    contentArea.appendChild(addBtnContainer);
    addBtnContainer.appendChild(addTodo);
    addBtnContainer.appendChild(sortByPriorityBtn);
    addTodo.innerText = '+';
    sortByPriorityBtn.innerText = 'Sort by Priority';
    contentArea.appendChild(todoContent);
}

export default formatContentArea;