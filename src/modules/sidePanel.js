import clearProjects from "./clearProjects";
import form from "./form";
import loadContent from "./loadContent";

function sidePanel () { //populates the side panel withe the title and a default project name

    const projectTitleContainer = document.createElement('div');

    formatSidePanel();
    addDefaultProject();

    //functions

    function addDefaultProject () {
        const projectTitle = document.createElement('div');
        projectTitle.classList.add('projectTitle');
        projectTitle.id = 'selected';  

        projectTitle.innerText = projectArray[0].title;
        projectTitleContainer.appendChild(projectTitle);
    
        projectTitle.addEventListener('click', () => { //when the project title is clicked, changes the id to selected and loads the todos for that project in the content area
            document.querySelector('#selected').removeAttribute('id');
            projectTitle.id = 'selected';
            loadContent();
        }); 
    }

    function formatSidePanel () {
        const sidePanel = document.querySelector('.sidePanel');
        const sidePanelTitle = document.createElement('div');
        const hr = document.createElement('hr');
        const newProjectDiv = document.createElement('div');
        const newProjectLabel = document.createElement('div');
        const newProjectBtn = document.createElement('button');
        const deleteAllProjectsBtn = document.createElement('button');
    
        sidePanelTitle.classList.add('sidePanelTitle');
        projectTitleContainer.classList.add('projectTitleContainer');
        newProjectDiv.classList.add('newProjectDiv');
        newProjectLabel.classList.add('newProjectLabel');
        newProjectBtn.classList.add('newProjectBtn');
        sidePanel.id = 'large';
        deleteAllProjectsBtn.classList.add('deleteAllProjectsBtn');
    
        sidePanelTitle.innerText = 'Projects';
        newProjectLabel.innerText = 'New Project: ';
        newProjectBtn.innerText = '+';
        deleteAllProjectsBtn.innerText = 'Delete All';
    
        sidePanel.appendChild(sidePanelTitle);
        sidePanel.appendChild(hr);
        sidePanel.appendChild(newProjectDiv);
        sidePanel.appendChild(projectTitleContainer);
        newProjectDiv.appendChild(newProjectLabel);
        newProjectDiv.appendChild(newProjectBtn);  
        sidePanel.appendChild(deleteAllProjectsBtn); 
        
        newProjectBtn.addEventListener('click', form); //brings up the form to make new projects
        deleteAllProjectsBtn.addEventListener('click', clearProjects);
    }
}

export default sidePanel; 