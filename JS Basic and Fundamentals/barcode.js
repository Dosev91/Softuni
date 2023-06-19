function slove(input) {
    let startNumber = input[0];
    let endNumber = input[1];
    let result = "";

    for (let i = startNumber[0]; i <= endNumber[0]; i++) {
        if (i % 2 !== 0) {
            for (let j = startNumber[1]; j <= endNumber[1]; j++) {
                if (j % 2 !== 0) {
                    for (let k = startNumber[2]; k <= endNumber[2]; k++) {
                        if (k % 2 !== 0) {
                            for (let m = startNumber[3]; m <= endNumber[3]; m++) {
                                if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && m % 2 !== 0) {
                                    result += i + "" + j + "" + "" + k + "" + "" + m + " ";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
slove(["2345", "6789"])

//3357 3359 3377 3379 3557 3559 3577 3579 5357 5359 5377 5379 5557 5559 5577 5579
