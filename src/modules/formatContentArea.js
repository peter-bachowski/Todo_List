import sortTodosByPriority from "./sortTodosByPriority";
import sortTodosByDueDate from "./sortTodosByDueDate";
import sortTodosByName from "./sortTodosByName";

function formatContentArea () {
    const contentArea = document.querySelector('.contentArea');
    const todoContent = document.createElement('div');
    const addBtnContainer = document.createElement('div');
    const addTodo = document.createElement('button');
    const sortByPriorityBtn = document.createElement('button');
    const sortByDateBtn = document.createElement('button');
    const sortByNameBtn = document.createElement('button');

    addBtnContainer.classList.add('addBtnContainer');
    todoContent.classList.add('todoContent');
    addTodo.classList.add('addTodo');
    sortByPriorityBtn.classList.add('sortByPriorityBtn');
    sortByDateBtn.classList.add('sortByDateBtn');
    sortByNameBtn.classList.add('sortByNameBtn');

    contentArea.appendChild(addBtnContainer);
    addBtnContainer.appendChild(addTodo);
    addBtnContainer.appendChild(sortByPriorityBtn);
    addBtnContainer.appendChild(sortByDateBtn);
    addBtnContainer.appendChild(sortByNameBtn);
    addTodo.innerText = '+';
    sortByPriorityBtn.innerText = 'Sort by Priority';
    sortByDateBtn.innerText = 'Sort by Date';
    sortByNameBtn.innerText = 'Sort By Name';
    contentArea.appendChild(todoContent);

    //listeners

    sortByPriorityBtn.addEventListener('click', sortTodosByPriority);

    sortByDateBtn.addEventListener('click', sortTodosByDueDate);

    sortByNameBtn.addEventListener('click', sortTodosByName);
}

export default formatContentArea;