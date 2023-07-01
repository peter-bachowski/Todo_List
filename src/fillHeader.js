function fillHeader () {
    
    const header = document.querySelector('.header');
    const newProjectBtn = document.createElement('button');
    const title = document.createElement('div');

    newProjectBtn.classList.add('newProjectBtn');
    title.classList.add('title');

    header.appendChild(title);
    header.appendChild(newProjectBtn);

    newProjectBtn.innerText = '+';
    title.innerText = 'Todo List';
}

export default fillHeader;