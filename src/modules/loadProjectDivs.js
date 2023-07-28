import clearProjects from "./clearProjects";
import loadContent from "./loadContent";

function loadProjectDivs () {

    clearProjects();

    for (let position = 0; position < projectArray.length; position++){
        loadProject(position);
    }

    document.querySelector('.projectTitleContainer').lastChild.id = 'selected';

    function loadProject (position) {
        const newProjectDiv = document.createElement('div');  

        newProjectDiv.classList.add('projectTitle');
        newProjectDiv.innerText = projectArray[position].title;
        document.querySelector('.projectTitleContainer').appendChild(newProjectDiv);
        if (document.querySelector('.lightbox') != null) {
            document.querySelector('.container').removeChild(document.querySelector('.lightbox'));   
        }
        
        newProjectDiv.addEventListener('click', () => {
            let selectedProject;
            document.querySelector('#selected').removeAttribute('id');
            newProjectDiv.id = 'selected';
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
    }
}

export default loadProjectDivs;