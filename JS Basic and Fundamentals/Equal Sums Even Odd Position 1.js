function slove(input) {
    let n = Number(input[0]);
    let sum = "";
    let space = 1;
    let isBigger = false;

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row - 1; col++) {
            if (space > n) {
                isBigger = true;
                break;
            }
            sum += space + " ";
            space++;

        }
        console.log(sum);
        sum = "";
        if (isBigger) {
            break;
        }
    }
}
slove(["15"])









// Equal Sums Even Odd Position 