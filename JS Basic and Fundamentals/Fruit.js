function fruit(fruitType, weigth, price) {

    let kilograms = weigth / 1000;
    let money = kilograms * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitType}.`);

}
fruit('orange', 2500, 1.80);
console.log(`------------------------------`);
fruit('apple', 1563, 2.35);