function fillFooter () { //fills in the footer with the copyright information
    const footer = document.querySelector('.footer');
    const copyRightText = document.createElement('div');

    copyRightText.classList.add('copyRightText');
    copyRightText.innerText = "Copyright © Peter Bachowski 2023";

    footer.appendChild(copyRightText);
}

export default fillFooter; 