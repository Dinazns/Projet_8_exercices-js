// Créez votre fonction ici

function calculate (a, b, operator) {

    let total;
    a = parseInt(a);
    b = parseInt(b);

    if (operator === "+") {
        total = a + b;
    } else if (operator === "-") {
        total = a - b;
    } else if (operator === "*") {
        total = a * b;
    } else if (operator === "/" && b != 0) {
        total = a / b;
    } else if (operator === "/" && b === 0) {
        return "Division by zero is not allowed";
    } else { 
        return "Invalid operator";
    }


    return total;
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
