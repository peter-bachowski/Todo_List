import clearContent from "./clearContent";
import clearProjects from "./clearProjects";
import loadContent from "./loadContent";
import loadProjectDivs from "./loadProjectDivs";

function sortProjectArray (deleteProjectBtn) {
    const projectToDeleteName = deleteProjectBtn.parentNode.innerText;
    let selectedProject;

    for (let i = 0; i < projectArray.length; i++){
        let project = projectArray[i];
        if (project.selected === true){
            project.selected = false;
        }
        if (project.title === projectToDeleteName) {
            projectArray.splice(i,1);
            try {
                projectArray[i].selected = true;
                selectedProject = project;    
            }
            catch {
                clearProjects();
                clearContent();
                console.log('There are no more projects!')
                return;
            }
        }
    }
    let projectDivs = document.querySelectorAll('.projectTitle');
    for (let i = 0; i < projectDivs.length; i++) {
        if (projectDivs[i].innerText === selectedProject.title) {
            projectDivs[i].id = 'selected';
            loadContent(selectedProject);
            break;
        }
    } 
    loadProjectDivs();
}

export default sortProjectArray;