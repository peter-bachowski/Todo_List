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

    let projectArray = [];
    let todoList = [];
    let todo1 = new Todo('default', 'This is the default project template.', 'July 23', 'High');
    let templateProject = new Project('Template', todoList, todoList.length, true);

    const sidePanel = document.querySelector('.sidePanel');
    const newProjectBtn = document.querySelector('.newProjectBtn');

    todoList.push(todo1);
    projectArray.push(templateProject);


    newProjectBtn.addEventListener('click', () => {
        projectForm();

   

    });
}

export default projectCounter;
