function sorting(input) {



    let arr = input.sort((a, b) => a - b);
    let finaleArr = [];
    let test = false;
    let startNum = input.length - 1;

    for (let i = 0; i < arr.length / 2; i++) {
        for (let j = startNum - i; j > 0; j--) {
            finaleArr.push(arr[j]);
            finaleArr.push(arr[i]);
            if (i == j) {
                test = true;
            }
            break;
        }
        if (test == true) {
            break;
        }

    }
    console.log(finaleArr.join(" "));


}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])