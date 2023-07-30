function resizeWindow () {

    let width = document.body.clientWidth;
    const mainBody = document.querySelector('.mainBody');
    const sidePanel = document.querySelector('.sidePanel');
    const todoContent = document.querySelector('.todoContent');

    if (width < 500) {
        mainBody.id = 'small';
        sidePanel.id = 'small';
        todoContent.id = 'small';
    }
    else {
        mainBody.id = 'large';
        sidePanel.id = 'large';
        todoContent.id = 'large';
    }
}
export default resizeWindow;