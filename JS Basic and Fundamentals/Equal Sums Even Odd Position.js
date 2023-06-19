function slove(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = "";
    let sum2 = "";
    let result = "";

    for (let i = num1; i <= num2; i++) {
        i = i + "";
        sum = Number(i[0]) + Number(i[2]) + Number(i[4]);
        sum2 = Number(i[1]) + Number(i[3]) + Number(i[5]);
        if (sum == sum2) {
            result += i + " ";
        }
    }
    console.log(result);

}
slove(["299900",
"300000"])

