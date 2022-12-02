function slove(input) {
    let age = Number(input[0]);
    let priceWash = Number(input[1]);
    let priceToy = Number(input[2]);
    let sum = 10;
    let toys = 0;
    let numberSum = 1;
    let sum2 = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0 && i != 2) {
            numberSum++
            sum2 += 10;
            sum = sum + sum2 + 10;
        } else if (i % 2 != 0) {

            toys++;
        }
    }
    let totalSum = (toys * priceToy) + sum - numberSum;
    let money = 0;
    if (totalSum >= priceWash) {
        money = totalSum - priceWash;
        console.log(`Yes! ${money.toFixed(2)}`);
    } else {
        money = priceWash - totalSum;
        console.log(`No! ${money.toFixed(2)}`);
    }

}
slove(["21", "1570.98", "3"])