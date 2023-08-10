import clearProjects from "./clearProjects";
import loadContent from "./loadContent";
import sortProjectArray from "./sortProjectArray";

function loadProjectDivs () {

    clearProjects();

    for (let position = 0; position < projectArray.length; position++){
        loadProject(position);
    }

    document.querySelector('.projectTitleContainer').lastChild.id = 'selectedProject';

    function loadProject (position) {
        const newProjectDiv = document.createElement('div');  
        const deleteProjectBtn = document.createElement('div');

        newProjectDiv.classList.add('projectTitle');
        deleteProjectBtn.classList.add('deleteProjectBtn')
        newProjectDiv.innerText = projectArray[position].title;
        document.querySelector('.projectTitleContainer').appendChild(newProjectDiv);
        newProjectDiv.appendChild(deleteProjectBtn);
        if (document.querySelector('.lightbox') != null) {
            document.querySelector('.container').removeChild(document.querySelector('.lightbox'));   
        }

        //listeners
        
        newProjectDiv.addEventListener('click', () => {
            let selectedProject;
            document.querySelector('#selectedProject').removeAttribute('id');
            newProjectDiv.id = 'selectedProject';
            for (let i = 0; i < projectArray.length; i++) {
                if (projectArray[i].title === newProjectDiv.innerText){
                    projectArray[i].selected = true;
                    selectedProject = projectArray[i];
                }
                else {
                    projectArray[i].selected = false;
                }
            }
            loadContent(selectedProject);
        });

        deleteProjectBtn.addEventListener('click', (event) => {
            sortProjectArray(deleteProjectBtn);
            event.stopPropagation();
        });
    }
}

export default loadProjectDivs;