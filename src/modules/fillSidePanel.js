function fillSidePanel () { //populates the side panel withe the title and a default project name
    const sidePanel = document.querySelector('.sidePanel');
    const sidePanelTitle = document.createElement('div');
    const projectTitleContainer = document.createElement('div');
    const hr = document.createElement('hr');
    const defaultProject = document.createElement('div');
    const newProjectDiv = document.createElement('div');
    const newProjectLabel = document.createElement('div');
    const newProjectBtn = document.createElement('button');

    sidePanelTitle.classList.add('sidePanelTitle');
    projectTitleContainer.classList.add('projectTitleContainer');
    newProjectDiv.classList.add('newProjectDiv');
    newProjectLabel.classList.add('newProjectLabel');
    newProjectBtn.classList.add('newProjectBtn');
    defaultProject.classList.add('projectTitle');
    defaultProject.id = 'selected';
    sidePanel.id = 'large';

    sidePanelTitle.innerText = 'Projects';
    defaultProject.innerText = 'default project title';
    newProjectLabel.innerText = 'New Project: ';
    newProjectBtn.innerText = '+';

    sidePanel.appendChild(sidePanelTitle);
    sidePanel.appendChild(hr);
    sidePanel.appendChild(projectTitleContainer);
    projectTitleContainer.appendChild(newProjectDiv);
        newProjectDiv.appendChild(newProjectLabel);
        newProjectDiv.appendChild(newProjectBtn);
    projectTitleContainer.appendChild(defaultProject);

    defaultProject.addEventListener('click', () => {
        document.querySelector('#selected').removeAttribute('id');
        defaultProject.id = 'selected';
    });
}

export default fillSidePanel; 