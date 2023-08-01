function clearContent () {
    const todoContent = document.querySelectorAll('.todo');

    for (let i = 0; i < todoContent.length; i++) {
        todoContent[i].remove();
    }
}

export default clearContent;