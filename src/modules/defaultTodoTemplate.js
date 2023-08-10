import findSelectedProject from "./findSelectedProject";
import findSelectedTodo from "./findSelectedTodo";
import populateTodoElement from "./populateTodoElement";
import sortTodosByDelete from "./sortTodosByDelete";

function defaultTodoTemplate (newTodoName) {
    const todoElement = document.createElement('div');
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
    const priorityIcon = document.createElement('div');
    const expandBtn = document.createElement('div');
    const retractBtn = document.createElement('div');

    todoElement.classList.add('todo');
    todoElement.classList.add('retracted');
    todoContent.classList.add('todoContent');
    todoName.classList.add('todoName');
    todoDescription.classList.add('todoDescription');
    todoDueDate.classList.add('todoDueDate');
    deleteBtn.classList.add('deleteBtn');
    radioContainer.classList.add('radioContainer');
    lowPriority.classList.add('priority');
    mediumPriority.classList.add('priority');
    highPriority.classList.add('priority');
    priorityIcon.classList.add('priorityIcon');
    expandBtn.classList.add('expandBtn');
    retractBtn.classList.add('retractBtn');

    todoElement.id = 'todo1';  
    nameLabel.innerText = 'Name: ';
    descriptionLabel.innerText = 'Description: ';
    dueDateLabel.innerText = 'Due Date: ';
    todoDueDate.type = 'date';
    priorityLabel.innerText = 'Priority: ';
    lowPriority.type = 'radio';
    lowPriority.name = newTodoName;
    lowPriority.value = 'Low';
    lowLabel.for = 'low';
    lowLabel.innerText = 'Low';
    mediumPriority.type = 'radio';
    mediumPriority.name = newTodoName;
    mediumPriority.value = 'Medium';
    mediumLabel.for = 'medium';
    mediumLabel.innerText = 'Medium';
    highPriority.type = 'radio';
    highPriority.name = newTodoName;
    highPriority.value = 'High';
    highLabel.for = 'high';
    highLabel.innerText = 'High';

    todoContent.appendChild(todoElement);
    todoElement.appendChild(priorityIcon);
    todoElement.appendChild(nameLabel);
    todoElement.appendChild(todoName);
    todoElement.appendChild(dueDateLabel);
    todoElement.appendChild(todoDueDate);
    todoElement.appendChild(expandBtn);
    
    //functions

    function addDetails () {
        todoElement.classList.remove('retracted');
        todoElement.classList.add('expanded');
        todoElement.appendChild(descriptionLabel);
        todoElement.appendChild(todoDescription);
        todoElement.appendChild(priorityLabel);
        radioContainer.appendChild(lowPriority);
        radioContainer.appendChild(lowLabel);
        radioContainer.appendChild(mediumPriority);
        radioContainer.appendChild(mediumLabel);
        radioContainer.appendChild(highPriority);
        radioContainer.appendChild(highLabel);
        todoElement.appendChild(radioContainer);
        todoElement.appendChild(deleteBtn); 
        todoElement.appendChild(retractBtn);
    }

    function removeDetails () {
        todoElement.classList.remove('expanded');
        todoElement.classList.add('retracted');
        todoElement.removeChild(descriptionLabel);
        todoElement.removeChild(todoDescription);
        todoElement.removeChild(priorityLabel);
        radioContainer.removeChild(lowPriority);
        radioContainer.removeChild(lowLabel);
        radioContainer.removeChild(mediumPriority);
        radioContainer.removeChild(mediumLabel);
        radioContainer.removeChild(highPriority);
        radioContainer.removeChild(highLabel);
        todoElement.removeChild(radioContainer);
        todoElement.removeChild(deleteBtn);
        todoElement.appendChild(expandBtn);
    }

    function deleteTodo () {
        sortTodosByDelete(deleteBtn);
    }

    function findTodoObject (priority) {
        const element = priority.parentNode.parentNode;
        const project = findSelectedProject();
        for(let i = 0; i < project.todoList.length; i++){
            if (project.todoList[i].element.id === element.id){
                return project.todoList[i];
            }   
        }
        return null;
    }

    //listeners

    deleteBtn.addEventListener('click', deleteTodo);

    lowPriority.addEventListener('click', () => {
        findTodoObject(lowPriority).priority = 'Low';
        lowPriority.parentNode.parentNode.querySelector('.priorityIcon').style.backgroundColor = 'green';
    });

    mediumPriority.addEventListener('click', () => {
        findTodoObject(mediumPriority).priority = 'Medium';
        mediumPriority.parentNode.parentNode.querySelector('.priorityIcon').style.backgroundColor = 'yellow';
    });

    highPriority.addEventListener('click', () => {
        findTodoObject(lowPriority).priority = 'High';
        highPriority.parentNode.parentNode.querySelector('.priorityIcon').style.backgroundColor = 'red';
    });

    expandBtn.addEventListener('click', () => {
        const project = findSelectedProject();
        todoElement.removeChild(expandBtn);
        addDetails();
        populateTodoElement(findSelectedTodo(project, todoElement), todoElement);
    });

    retractBtn.addEventListener('click', () => {
        todoElement.removeChild(retractBtn);
        removeDetails();
    });

    todoName.addEventListener('input', () => {
        findSelectedTodo(findSelectedProject(), todoElement).name = todoName.value;
        todoElement.id = todoName.value
    });

    todoDescription.addEventListener('input', () => {
        findSelectedTodo(findSelectedProject(), todoElement).description = todoDescription.value;
    });

    todoDueDate.addEventListener('input', () => {
        findSelectedTodo(findSelectedProject(), todoElement).dueDate = todoDueDate.value;
    });
    
    return todoElement;
}

export default defaultTodoTemplate;