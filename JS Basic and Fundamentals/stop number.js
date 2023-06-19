function slove(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let sum = "";

    for (let i = m; i >= n; i--) {
        if (i == s && i % 2 == 0 && i % 3 == 0) {
            break;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            sum += i + " "
        }

    }
    console.log(sum);

}
slove(['1', "30", "15"])