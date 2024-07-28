function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value.trim();

    if (!decimalInput || isNaN(decimalInput) || parseInt(decimalInput) != decimalInput) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    const decimalNumber = parseInt(decimalInput, 10);
    if (decimalNumber < 0) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    let binaryResult = '';
    let number = decimalNumber;

    for (let n = number; n > 0; n = (n - n % 2) / 2) {
        binaryResult = (n % 2) + binaryResult;
    }

    if (binaryResult === '') {
        binaryResult = '0';
    }

    document.getElementById('binaryResult').textContent = binaryResult;
}
