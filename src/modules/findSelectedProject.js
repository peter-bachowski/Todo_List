function findSelectedProject () {
    
    let selectedProject;

    for (let i = 0; i < projectArray.length; i++) {
        if(projectArray[i].selected === true) {
            selectedProject = projectArray[i];
        }
    }
    return selectedProject;
}

export default findSelectedProject;