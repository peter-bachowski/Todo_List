function fillFooter () {
    const footer = document.querySelector('.footer');
    const copyRightText = document.createElement('div');

    copyRightText.classList.add('copyRightText');
    copyRightText.innerText = "Copyright © Peter Bachowski";

    footer.appendChild(copyRightText);
}

export default fillFooter; 