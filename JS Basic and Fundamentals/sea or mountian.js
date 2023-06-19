function slove(input) {
    let mountainNum = Number(input[0]);
    let seaNum = Number(input[1]);
    let profit = 0;

    for (let i = 2; i < input.length; i++) {
        if (seaNum > 0 && input[i] == "sea") {
            profit += 680;
            seaNum--;
        } else if (mountainNum > 0 && input[i] == "mountain") {
            profit += 499;
            mountainNum--;
        } else if (input[i] == "Stop") {
            break;
        }
    }
    if (mountainNum <= 0 && seaNum <= 0) {
        console.log(`Good job! Everything is sold.`);
    }
    console.log(`Profit: ${profit} leva.`);

}
slove(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])







