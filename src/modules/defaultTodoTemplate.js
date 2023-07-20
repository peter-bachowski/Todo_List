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
    deleteBtn.classList.add('deleteBtn');

    todoContent.appendChild(todo);
    todo.appendChild(todoName);
    todo.appendChild(todoDescription);
    todo.appendChild(todoDueDate);
    todo.appendChild(deleteBtn); 

    deleteBtn.parentNode.remove();
    
    deleteBtn.innerText = 'Delete';  
    todoName.value = 'title';
    todoDescription.value = 'This is the default project template.';
    todoDueDate.value = 'July 23';

    function deleteTodo () {
        deleteBtn.parentNode.remove();
    }

    deleteBtn.addEventListener('click', deleteTodo);
    
    return todo;
}

export default defaultTodoTemplate;