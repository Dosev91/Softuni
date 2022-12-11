function slove(input) {
    const priceTshirt = Number(input[0]);
    const sumNeed = Number(input[1]);

    let shorts = 0.75 * priceTshirt;
    let socks = 0.20 * shorts;
    let buttons = (priceTshirt + shorts) * 2;
    let sum = priceTshirt + shorts + socks + buttons;
    let totalPrice = sum - (0.15 * sum);

    if (totalPrice >= sumNeed) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(sumNeed - totalPrice).toFixed(2)} lv. more.`);
    }

}
slove(["59.99",
"500"])



