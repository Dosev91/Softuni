function getFibonator() {
    const numbers = [0, 0];

    return () => {
        let sum = numbers[0] + numbers[1];
        if (sum === 0) {
            sum = 1;
            numbers.push(1);
            numbers.shift();
        } else {
            numbers.push(sum);
            numbers.shift();
        }
        return sum;
    }
}

const fibonator = getFibonator();

console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
