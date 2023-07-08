import projectForm from "./projectForm";

function projectCounter () {
    
    class Project {
        constructor(name, todoList, listSize, selected){
            this.name = name;
            this.todoList = todoList;
            this.listSize = listSize;
            this.selected = selected;
        }
    }

    class Todo {
        constructor(title, description, dueDate, priority){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    let projectCounter = 1;

    let projectArray = [];
    let todoList = [];
    let todo1 = new Todo('default', 'This is the default project template.', 'July 23', 'High');
    let templateProject = new Project('Template', todoList, todoList.length, true);

    const newProjectBtn = document.querySelector('.newProjectBtn');

    todoList.push(todo1);
    projectArray.push(templateProject);


    newProjectBtn.addEventListener('click', () => {
        projectCounter += 1;
        projectForm(projectCounter);
    });
}

export default projectCounter;
