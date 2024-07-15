const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');

function etiquetteLabel(input, labelText) {
    const label = document.createElement('label');
    
    label.setAttribute('for', input.id);
    label.textContent = labelText;
    
    input.parentNode.insertBefore(label, input);
}

etiquetteLabel(inputName, 'Nom: ');
etiquetteLabel(inputEmail, 'Adresse e-mail: ');

const image = document.getElementById('Image');
image.setAttribute('alt', 'image');

const clickHere = document.getElementById('ClickHere');
clickHere.setAttribute('title', 'Cliquez ici');
