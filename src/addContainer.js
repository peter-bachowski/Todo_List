function addContainer () {
    const container = document.createElement('div');

    container.classList.add('container');
    document.body.appendChild(container);
}

export default addContainer;