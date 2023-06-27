function addBaseElements () {
    const container = document.createElement('div');
    const header = document.createElement('div');
    const mainBody = document.createElement('div');
    const sidePanel = document.createElement('div');
    const contentArea = document.createElement('div');
    const footer = document.createElement('div');

    container.classList.add('container');
    header.classList.add('header');
    mainBody.classList.add('mainBody');
    sidePanel.classList.add('sidePanel');
    contentArea.classList.add('contentArea');
    footer.classList.add('footer');

    document.body.appendChild(container);
    container.appendChild(header);
    container.appendChild(mainBody);
    mainBody.appendChild(sidePanel)
    mainBody.appendChild(contentArea);
    container.appendChild(footer);



}

export default addBaseElements;