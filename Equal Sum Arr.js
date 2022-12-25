function slove(input) {

    let leftSum = 0;
    let rightSum = 0;
    let step = 0;
    let aa = input.length - 1;



    for (let i = 0; i < input.length; i++) {
        if (leftSum !== rightSum || leftSum == 0) {
            leftSum += Number(input[i]);
            step++
        }
        for (let j = aa; j > 0; j--) {
            if (leftSum !== rightSum || leftSum == 0) {
                rightSum += Number(input[j]);
            } if (leftSum < rightSum || leftSum == 0) {
                aa = j - 1;
                break;
            }
        }
    }
    if (leftSum === rightSum || step == 0) {
        console.log(step);
    } else {
        console.log(`no`);
    }
}

slove([1, 2, 3, 3])