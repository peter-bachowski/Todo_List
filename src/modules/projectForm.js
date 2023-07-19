import projectData from "./projectData";

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

    //functions

    function closeLightbox () {
        container.removeChild(lightbox);
    }

    function addProjectTab () {
        const newProjectDiv = document.createElement('div');  
        newProjectDiv.addEventListener('click', () => {
            document.querySelector('#selected').removeAttribute('id');
            newProjectDiv.id = 'selected';
        });
        newProjectDiv.classList.add('projectTitle');
        newProjectDiv.innerText = titleInput.value;
        document.querySelector('.projectTitleContainer').appendChild(newProjectDiv);
        container.removeChild(lightbox);
    }

    //listeners

    close.addEventListener('click', closeLightbox);

    submitBtn.addEventListener('click', () => {
        if (titleInput.value !== '') {
           addProjectTab();
        }
    });
}

export default projectForm;