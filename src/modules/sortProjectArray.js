import loadProjectDivs from "./loadProjectDivs";

function sortProjectArray (deleteProjectBtn) {
    const projectToDeleteName = deleteProjectBtn.parentNode.innerText;

    for (let i = 0; i < projectArray.length; i++){
        if (projectArray[i].id === 'selected'){
            projectArray[i].removeAttribute(id);
        }
        if (projectArray[i].title === projectToDeleteName) {
            projectArray[i].id = 'selected';
            projectArray.splice(i,1);
        }
    }
    loadProjectDivs();
}

export default sortProjectArray;