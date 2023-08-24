function getSum(a, b) {

    let sum = 0;

    if (a > b) {
        sum = a;
        for (let i = b; i < a; i++) {
            sum += i;
        }
    } else if (b > a) {
        sum = b;
        for (let i = a; i < b; i++) {
            sum += i;
        }
    } else {
        return a;
    }

    return sum;
}

getSum(1, 1)