function fillSidePanel () {
    const sidePanel = document.querySelector('.sidePanel');
    const sidePanelTitle = document.createElement('div');
    const hr = document.createElement('hr');

    sidePanelTitle.classList.add('sidePanelTitle');

    sidePanelTitle.innerText = 'Projects';
    sidePanelTitle.appendChild(hr);

    sidePanel.appendChild(sidePanelTitle);
}

export default fillSidePanel; 