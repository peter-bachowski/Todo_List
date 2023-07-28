function clearProjects () {
    const projectTitleContainer = document.querySelector('.projectTitleContainer');
    while(projectTitleContainer.hasChildNodes()){
        projectTitleContainer.removeChild(projectTitleContainer.firstChild);
    }
}

export default clearProjects;