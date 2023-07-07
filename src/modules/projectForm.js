function projectForm () {
    // the lightbox
    const lightbox = document.createElement('lightbox');
    const container = document.querySelector('.container');

    lightbox.classList.add('lightbox');
    container.appendChild(lightbox);

    // the form container
    const formContainer = document.createElement('div');
    const close = document.createElement('div');

    formContainer.classList.add('formContainer');
    lightbox.appendChild(formContainer);
    close.classList.add('close');
    formContainer.appendChild(close);

    //the form itself
    const form = document.createElement('form');
    const titleLabel = document.createElement('titleLabel');
    const titleInput = document.createElement('input');
    const submitBtn = document.createElement('button');

    titleLabel.innerText = 'New project title: ';
    titleInput.type = 'text';
    titleInput.required = true;
    submitBtn.innerText = 'Submit';
    submitBtn.type = 'button';
    form.classList.add('form');
    formContainer.appendChild(form);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(submitBtn);

    //listeners
    close.addEventListener('click', () => {
        container.removeChild(lightbox);
    });

    submitBtn.addEventListener('click', () => {
        const newProjectDiv = document.createElement('div');  
        newProjectDiv.addEventListener('click', () => {
            document.querySelector('#selected').id = null;
            newProjectDiv.id = 'selected';
        });
        newProjectDiv.classList.add('projectTitle');
        newProjectDiv.innerText = titleInput.value;
        document.querySelector('.sidePanel').appendChild(newProjectDiv);
        if (titleInput.value !== null) {
            container.removeChild(lightbox);
        }
    });
}

export default projectForm;