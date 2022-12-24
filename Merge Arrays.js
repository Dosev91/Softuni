function slove(input, arr) {

    let finalArr = [];
    let arrlength = input.length - 1;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i % 2 == 0) {
                finalArr.push(Number(input[i]) + Number(arr[j]));
                break;
            } else {
                finalArr.push("" + input[i] + arr[j]);
                break;
            }

        }
        if ((i + 1) > arrlength) {
            break;
        } else {
            finalArr.push(" - ");
        }
    }
    for (let k = 0; k < finalArr.length; k++) {
        result += finalArr[k];

    }
    console.log(result);

}
slove(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']

)