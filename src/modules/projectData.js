import defaultTodoTemplate from "./defaultTodoTemplate";
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
        constructor(name, description, dueDate, priority, element){
            this.name = name;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.element = element;
        }
    }

    //local variables

    let defaultTodoList = [];
    const newProjectBtn = document.querySelector('.newProjectBtn');

    //global variables

    window.projectArray = []; //makes the projectArray global
    window.Project = Project; //global class
    window.Todo = Todo; //global class
    window.defaultTodo = new Todo('1', 'This is the default project template.', 'July 23', 'High', defaultTodoTemplate()); //global default todo object
    window.defaultProject = new Project('Default Project', defaultTodoList, defaultTodoList.length, true);

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
