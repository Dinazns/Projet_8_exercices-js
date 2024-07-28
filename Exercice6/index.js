const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        if (display.value.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = eval(display.value);
        }
    } catch {
        display.value = 'Erreur';
    }
}