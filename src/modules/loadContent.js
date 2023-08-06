import populateTodoElement from "./populateTodoElement";

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

    function clearContent () {
        for (let i = 0; i < todoContent.length; i++) {
            todoContent[i].remove();
        }
    }
}

export default loadContent;