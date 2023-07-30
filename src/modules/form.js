import loadContent from "./loadContent";
import loadProjectDivs from "./loadProjectDivs";

function form () {
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
    titleInput.classList.add('titleInput');
    formContainer.appendChild(form);
    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(submitBtn);

    //functions

    function closeLightbox () {
        container.removeChild(lightbox);
    }

    //listeners

    close.addEventListener('click', closeLightbox);

    submitBtn.addEventListener('click', () => {
        if (titleInput.value !== '') {
            let newTodoList = [];
            let newProject = new Project(titleInput.value, newTodoList, newTodoList.length, true);
            for (let i = 0; i < projectArray.length; i++) {
                projectArray[i].selected = false;
            }
            projectArray.push(newProject);
           loadProjectDivs();
           loadContent(newProject);
        }
    });
}

export default form;