function solve(arr) {
    let numClient = Number(arr[0]);
    let numProduct = 0;
    let basket = 1.50;
    let wreath = 3.80;
    let chocolateBunny = 7;
    let price = 0;
    let totalPrice = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == "Finish" && numProduct % 2 == 0) {
            price = price - (price * 0.2);
            totalPrice += price;
            console.log(`You purchased ${numProduct} items for ${price.toFixed(2)} leva.`);
            numProduct = 0;
            price = 0;
        } else if (arr[i] == "Finish" && numProduct % 2 !== 0) {
            totalPrice += price;
            console.log(`You purchased ${numProduct} items for ${price.toFixed(2)} leva.`);
            numProduct = 0;
            price = 0;
        } if (arr[i] == "basket") {
            numProduct++;
            price += basket;
        } else if (arr[i] == "wreath") {
            numProduct++;
            price += wreath;
        } else if (arr[i] == "chocolate bunny") {
            numProduct++;
            price += chocolateBunny;
        }

    }
    totalPrice = totalPrice / numClient;
    console.log(`Average bill per client is: ${totalPrice.toFixed(2)} leva.`);


}
solve(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish",
])
