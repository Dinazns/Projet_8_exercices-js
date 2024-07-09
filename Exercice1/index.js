//votre code ici

function pairNumbers(min, max) {
    min = parseInt(min);
    max = parseInt(max);

    if (min >= max) {
        return '';
    }

    const numbers = [];

    for (let n = min; n <= max; n++) {
        if (n % 2 === 0) {
            numbers.push(n);
        }
    }    
    return numbers.join(',');
}

console.log(pairNumbers(1, 10)); 

export default pairNumbers;

