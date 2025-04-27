
const changeTextBtn = document.getElementById('changeTextBtn');
const textContent = document.getElementById('textContent');

changeTextBtn.addEventListener('click', () => {
    textContent.textContent = 'The text has been changed!';
});


const changeStyleBtn = document.getElementById('changeStyleBtn');
changeStyleBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#a8dadc'; 
    textContent.style.color = '#e63946'; 
});


const addElementBtn = document.getElementById('addElementBtn');
const newElementContainer = document.getElementById('newElementContainer');

addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added paragraph!';
    newElement.style.color = '#333';
    newElement.style.fontSize = '16px';

    newElementContainer.appendChild(newElement);
});
