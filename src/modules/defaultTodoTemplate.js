import sortTodoArray from "./sortTodoArray";

function defaultTodoTemplate () {
    const todo = document.createElement('div');
    const todoContent = document.createElement('div');
    const deleteBtn = document.createElement('div');
    const nameLabel = document.createElement('label');
    const todoName = document.createElement('input'); 
    const descriptionLabel = document.createElement('label');
    const todoDescription = document.createElement('textArea');
    const dueDateLabel = document.createElement('label')
    const todoDueDate = document.createElement('input');
    const priorityLabel = document.createElement('label');
    const radioContainer = document.createElement('div');
    const lowPriority = document.createElement('input');
    const lowLabel = document.createElement('label');
    const mediumPriority = document.createElement('input');
    const mediumLabel = document.createElement('label');
    const highPriority = document.createElement('input');
    const highLabel = document.createElement('label');

    todo.classList.add('todo');
    todoContent.classList.add('todoContent');
    todoName.classList.add('todoName');
    todoDescription.classList.add('todoDescription');
    todoDueDate.classList.add('todoDueDate');
    deleteBtn.classList.add('deleteBtn');
    radioContainer.classList.add('radioContainer');
    lowPriority.classList.add('priority');
    mediumPriority.classList.add('priority');
    highPriority.classList.add('priority');

    nameLabel.innerText = 'Name: ';
    descriptionLabel.innerText = 'Description: ';
    dueDateLabel.innerText = 'Due Date: ';
    todoDueDate.type = 'datetime-local';
    priorityLabel.innerText = 'Priority: ';
    lowPriority.type = 'radio';
    lowPriority.name = 'priority';
    lowPriority.id = 'low';
    lowLabel.for = 'low';
    lowLabel.innerText = 'Low';
    mediumPriority.type = 'radio';
    mediumPriority.name = 'priority';
    mediumPriority.id = 'medium';
    mediumLabel.for = 'medium';
    mediumLabel.innerText = 'Medium';
    highPriority.type = 'radio';
    highPriority.name = 'priority';
    highPriority.id = 'high';
    highLabel.for = 'high';
    highLabel.innerText = 'High';

    todoContent.appendChild(todo);
    todo.appendChild(nameLabel);
    todo.appendChild(todoName);
    todo.appendChild(descriptionLabel);
    todo.appendChild(todoDescription);
    todo.appendChild(dueDateLabel);
    todo.appendChild(todoDueDate);
    todo.appendChild(priorityLabel);
    todo.appendChild(deleteBtn); 
    radioContainer.appendChild(lowPriority);
    radioContainer.appendChild(lowLabel);
    radioContainer.appendChild(mediumPriority);
    radioContainer.appendChild(mediumLabel);
    radioContainer.appendChild(highPriority);
    radioContainer.appendChild(highLabel);
    todo.appendChild(radioContainer);
    
    todo.id = 'todo1';  
    
    //functions

    function deleteTodo () {
        sortTodoArray(deleteBtn);
    }

    //listeners

    deleteBtn.addEventListener('click', deleteTodo);
    
    return todo;
}

export default defaultTodoTemplate;