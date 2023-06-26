function addContainer () {
    const container = document.createElement('div');

    container.classList.add('container');
    container.innerText = 'Hello World';
    document.body.appendChild(container);
}

export default addContainer;