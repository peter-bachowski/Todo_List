function loadProjectTodo (project) {
    const contentArea = document.querySelector('.contentArea');
    const todo1 = document.createElement('div');
    const todo2 = document.createElement('div');
    const todo3 = document.createElement('div');


    todo1.classList.add('todo');
    todo2.classList.add('todo');
    todo3.classList.add('todo');

    contentArea.appendChild(todo1);
    contentArea.appendChild(todo2);
    contentArea.appendChild(todo3);
}

export default loadProjectTodo;