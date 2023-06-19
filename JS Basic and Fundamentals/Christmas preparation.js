function slove(input) {
    const numberRollsPaper = Number(input[0]);
    const numberRollsCloth = Number(input[1]);
    const litersGlue = Number(input[2]);
    const precentDiscount = Number(input[3]);

    let price = (numberRollsPaper * 5.8) + (numberRollsCloth * 7.2) + (litersGlue * 1.2);
    let totalPrice = price - (price * precentDiscount) / 100;

    console.log(totalPrice.toFixed(3));
}
slove(["4",
    "2",
    "5",
    "13"])

