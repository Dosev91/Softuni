function sequences(input) {

    let arr = [];

    for (const key of input) {
        let workArr = JSON.parse(key);
        arr.push(workArr);
    }

    for (let i = 0; i < arr.length; i++) {
        let sumArr = arr[i].reduce((x, y) => x += y, 0);
        for (let j = i + 1; j < arr.length; j++) {
            if (sumArr == arr[j].reduce((x, y) => x += y, 0)) {
                arr.splice(j, 1);
                j--;
            }
        }
        break;
    }

    arr.sort((a, b) => a.length - b.length);

    for (const key of arr) {
        let a = key.sort((a, b) => b - a);
        console.log(a);
    }
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])

// sequences(["[7.14, 7.180, 7.339, 80.099]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"])