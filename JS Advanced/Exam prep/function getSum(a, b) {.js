function getSum(x, y) {

    let sum = 0;

    if (x > y) {
        sum = x;
        for (let i = y; i < x; i++) {
            sum += i;
        }
    } else if (y > x) {
        sum = y;
        for (let i = x; i < y; i++) {
            sum += i;
        }
    } else {
        return x;
    }

    return sum;

}

getSum(1, 1)