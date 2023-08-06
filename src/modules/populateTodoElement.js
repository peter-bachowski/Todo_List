function populateTodoElement (todo, element) { //fills in the input boxes with the information for each individual todo
    let name = todo.name;
    let description = todo.description;
    let dueDate = todo.dueDate;

    try {
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
    catch {
        console.log('Cannot populate todo.');
    }



}

export default populateTodoElement;