function loadContent (project) { //loads all the todos that are part of the selected project

    const todoList = project.todoList;
    const todoContent = document.querySelectorAll('.todo');

    clearContent();

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const element = todoList[i].element;
        document.querySelector('.todoContent').appendChild(element);
        populateTodoElement(todo, element);
    }

    function populateTodoElement (todo, element) { //fills in the input boxes with the information for each individual todo
        let name = todo.name;
        let description = todo.description;
        let dueDate = todo.dueDate;

        const todoNameInput = element.querySelector('.todoName');
        const todoDescriptionInput = element.querySelector('.todoDescription');
        const todoDueDateInput = element.querySelector('.todoDueDate');

        element.querySelector('.todoName').value = name;
        element.querySelector('.todoDescription').value = description;
        element.querySelector('.todoDueDate').value = dueDate;

        todoNameInput.addEventListener('input', () => {
            todo.name = todoNameInput.value;
            element.id = todoNameInput.value
        });

        todoDescriptionInput.addEventListener('input', () => {
            todo.description = todoDescriptionInput.value;
        });

        todoDueDateInput.addEventListener('input', () => {
            todo.dueDate = todoDueDateInput.value;
        });
    }

    function clearContent () {
        for (let i = 0; i < todoContent.length; i++) {
            todoContent[i].remove();
        }
    }
}

export default loadContent;