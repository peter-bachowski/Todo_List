import projectCounter from "./projectData";

function loadTodos (project) {

    const contentArea = document.querySelector('.contentArea');
    const todoContent = document.createElement('div');
    const addBtnContainer = document.createElement('div');
    const addTodo = document.createElement('button');

    addBtnContainer.classList.add('addBtnContainer');
    todoContent.classList.add('todoContent');
    addTodo.classList.add('addTodo');

    contentArea.appendChild(addBtnContainer);
    addBtnContainer.appendChild(addTodo);
    addTodo.innerText = '+';

    contentArea.appendChild(todoContent);

    todoContent.appendChild(todoTemplate(project));


    //functions

    
    function createNewTodo (project) {
        const newTodo = todoTemplate(project);
        todoContent.appendChild(newTodo);
    }

    function todoTemplate (project) {     //creates a todo template

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
        
        deleteBtn.innerText = 'Delete';  
        todoName.value = project.todoList[0].name;
        todoDescription.value = project.todoList[0].description;
        todoDueDate.value = project.todoList[0].dueDate;
        
        return todo;
    }

    //listeners

    addTodo.addEventListener('click', createNewTodo);
}

export default loadTodos;