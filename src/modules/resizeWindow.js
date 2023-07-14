function resizeWindow () {
    let width = document.body.clientWidth;
    const mainBody = document.querySelector('.mainBody');
    const sidePanel = document.querySelector('.sidePanel');
    if (width < 300) {
        mainBody.id = 'small';
        sidePanel.id = 'small';
    }
    else {
        mainBody.id = 'large';
        sidePanel.id = 'large';
    }
}
export default resizeWindow;