function perfectNumber(number) {

    let arr = arrOfPositiveInteger(number)
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (sum === number) {
        console.log(`We have a perfect number`);
    } else {
        console.log(`It's not so perfect`);
    }

}
function arrOfPositiveInteger(num) {

    let x = num;
    let arr = [];

    while (x >= 1) {
        arr.push(Math.ceil(x / 2));
        x = x / 2;
    }
    return arr;

}
perfectNumber(1236498)