function slove(input) {
    const days = Number(input[0]);
    const rooms = input[1];
    const rating = input[2];
    let price = 0;
    let priceDiscount = 0


    if (rooms == "room for one person" && rating == "positive") {
        price = (days - 1) * 18;
        price = price + ((price * 25) / 100);
        console.log(price.toFixed(2));
    } else if ((rating == "negative" && rooms == "room for one person")) {
        price = price - ((price * 10) / 100)
        console.log(price.toFixed(2));
    }
    if (days < 10 && rooms == "apartment") {
        price = (days - 1) * 25;
        priceDiscount = price - ((price * 30) / 100);
    } else if (days >= 10 && days <= 15 && rooms == "apartment") {
        price = (days - 1) * 25;
        priceDiscount = price - ((price * 35) / 100);
    } else if (days > 15 && rooms == "apartment") {
        price = (days - 1) * 25;
        priceDiscount = price - ((price * 50) / 100);
    }
    if (days < 10 && rooms == "president apartment") {
        price = (days - 1) * 35;
        priceDiscount = price - ((price * 10) / 100);
    } else if (days >= 10 && days <= 15 && rooms == "president apartment") {
        price = (days - 1) * 35;
        priceDiscount = price - ((price * 15) / 100);
    } else if (days > 15 && rooms == "president apartment") {
        price = (days - 1) * 35;
        priceDiscount = price - ((price * 20) / 100);
    }

    if (rating == "positive" && rooms !== "room for one person") {
        price = priceDiscount + ((priceDiscount * 25) / 100);
        console.log(price.toFixed(2));
    } else if ((rating == "negative" && rooms !== "room for one person")) {
        price = priceDiscount - ((priceDiscount * 10) / 100)
        console.log(price.toFixed(2));
    }
}


slove(["2",
"apartment",
"positive"])










