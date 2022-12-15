function printLine(row) {
    arr = [];

    for (let i = 1; i <= row; i++) {
        arr.push(i)
    }
    console.log(arr.join(" "));
}
function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        printLine(i)
    }
    for (let j = rows - 1; j > 0; j--) {
        printLine(j);

    }

}
printTriangle(10)