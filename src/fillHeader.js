function fillHeader () {
    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('newProjectBtn');
    document.querySelector('.header').appendChild(newProjectBtn);
    newProjectBtn.innerText = '+';
}

export default fillHeader;