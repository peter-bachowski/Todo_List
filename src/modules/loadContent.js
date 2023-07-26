function loadContent () { //loads all the todos that are part of the selected project
    const project = projectArray[0];
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

        element.querySelector('.todoName').value = name;
        element.querySelector('.todoDescription').value = description;
        element.querySelector('.todoDueDate').value = dueDate;
    }

    function clearContent () {
        for (let i = 0; i < todoContent.length; i++) {
            todoContent[i].remove();
        }
    }

}

export default loadContent;