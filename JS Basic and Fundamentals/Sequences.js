function sequences(input) {

    let sum = [];
    let arr = [];

    for (const key of input) {
        // let a = key.substring(1, key.length - 1).split(", ").map(Number);
        let a = JSON.parse(key);
        let testNum = a.reduce((sum, x) => sum += x, 0)
        a = a.sort((x, y) => y - x);
        if (!sum.includes(testNum)) {
            sum.push(testNum)
            arr.push(a);
        }
    }
    arr = arr.sort((a, b) => a.length - b.length);

    for (const key of arr) {
        console.log(key);

    }
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])
console.log(`=========================================`);
sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"])