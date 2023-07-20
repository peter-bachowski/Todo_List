import projectForm from "./projectForm";

function projectData () {

    //classes
    
    class Project {
        constructor(title, todoList, listSize, selected){
            this.title = title;
            this.todoList = todoList;
            this.listSize = listSize;
            this.selected = selected;
        }
    }

    class Todo {
        constructor(name, description, dueDate, priority){
            this.name = name;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    //variables

    let defaultTodoList = [];
    let defaultProject = new Project('Default Project', defaultTodoList, defaultTodoList.length, true);
    let defaultTodo = new Todo('1', 'This is the default project template.', 'July 23', 'High');

    const newProjectBtn = document.querySelector('.newProjectBtn');

    //actions

    defaultTodoList.push(defaultTodo);
    projectArray.push(defaultProject);

    //listeners

    newProjectBtn.addEventListener('click', () => {
        projectForm();
    });

    //functions

}

export default projectData;
