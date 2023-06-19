function slove(input) {

    let sumOfOriginalArr = 0;
    let modifiedArr = 0;
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        sumOfOriginalArr += input[i];
        if (input[i] % 2 == 0) {
            modifiedArr += input[i] + i;
            newArr.push(input[i] + i);
        } else {
            modifiedArr += input[i] - i;
            newArr.push(input[i] - i);
        }
    }
    console.log(newArr);
    console.log(sumOfOriginalArr);
    console.log(modifiedArr);
}
slove([-5, 11, 3, 0, 2])
