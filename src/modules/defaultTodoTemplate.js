import sortTodoArray from "./sortTodoArray";

function defaultTodoTemplate () {
    const todo = document.createElement('div');
    const todoContent = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const todoName = document.createElement('input'); 
    const todoDescription = document.createElement('textArea');
    const todoDueDate = document.createElement('input');

    todo.classList.add('todo');
    todoContent.classList.add('todoContent');
    todoName.classList.add('todoName');
    todoDescription.classList.add('todoDescription');
    todoDueDate.classList.add('todoDueDate');
    deleteBtn.classList.add('deleteBtn');

    todoContent.appendChild(todo);
    todo.appendChild(todoName);
    todo.appendChild(todoDescription);
    todo.appendChild(todoDueDate);
    todo.appendChild(deleteBtn); 
    
    deleteBtn.innerText = 'Delete';
    todo.id = 'todo1';  

    //functions

    function deleteTodo () {
        sortTodoArray(deleteBtn);
    }

    deleteBtn.addEventListener('click', deleteTodo);
    
    return todo;
}

export default defaultTodoTemplate;