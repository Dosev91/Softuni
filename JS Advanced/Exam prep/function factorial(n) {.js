function factorial(n) {
    if (n === 0) {
        // console.log(n);
        return 1; // базов случай
    } else {
        return n * factorial(n - 1); // рекурсивно извикване
    }

}
// let a = factorial(5)
// console.log(a);

function power(x, n) {
    if (n === 0) {
        return 1; // Базов случай: x^0 = 1
    } else {
        return x * power(x, n - 1); // Рекурсивно извикване
    }
}
let b = power(2,3)
console.log(b);