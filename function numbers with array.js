function printLine(num) {
    let numbers = [];

    for (let i = 1; i <= num; i++) {
        numbers.push(i);
    }

    console.log(numbers.join(" "));
}
function printTriangle(rows) {

    for (let i = 1; i <= rows; i++) {
        printLine(i)
    }
    for (let j = rows - 1; j > 0; j--) {
        printLine(j)

    }
}

printTriangle(5)

