function populateTodoElement (todo, element) { //fills in the input boxes with the information for each individual todo
    let name = todo.name;
    let description = todo.description;
    let dueDate = todo.dueDate;

    try {
        element.querySelector('.todoName').value = name;
        element.querySelector('.todoDescription').value = description;
        element.querySelector('.todoDueDate').value = dueDate;
    }
    catch {
    }



}

export default populateTodoElement;