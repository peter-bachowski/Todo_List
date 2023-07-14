function fillHeader () { //fills header with the title and the add button
    
    const header = document.querySelector('.header');
    const title = document.createElement('div');

    title.classList.add('title');

    header.appendChild(title);
    title.innerText = 'Todo List';
}

export default fillHeader;