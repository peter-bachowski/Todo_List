function fillSidePanel () { //populates the side panel withe the title and a default project name
    const sidePanel = document.querySelector('.sidePanel');
    const sidePanelTitle = document.createElement('div');
    const hr = document.createElement('hr');
    const defaultProject = document.createElement('div');

    sidePanelTitle.classList.add('sidePanelTitle');
    defaultProject.classList.add('projectTitle');

    sidePanelTitle.innerText = 'Projects';
    defaultProject.innerText = 'default project title';

    sidePanel.appendChild(sidePanelTitle);
    sidePanel.appendChild(hr);
    sidePanel.appendChild(defaultProject);
}

export default fillSidePanel; 