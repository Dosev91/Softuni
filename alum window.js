function slove(input) {
    let numberWindow = Number(input[0]);
    let typeWindow = input[1];
    let receivedMethod = input[2];
    let sum = 0;

    switch (typeWindow) {
        case "90X130": sum = 110;
            if (numberWindow >= 30 && numberWindow <= 60) {
                sum = sum - (sum * 0.05);
            } else if (sum > 60) {
                sum = sum - (sum * 0.08);
            } break;
        case "100X150": sum = 140;
            if (numberWindow >= 30 && numberWindow <= 60) {
                sum = sum - (sum * 0.06);
            } else if (sum > 60) {
                sum = sum - (sum * 0.1);
            } break;
        case "130X180": sum = 190;
            if (numberWindow >= 30 && numberWindow <= 60) {
                sum = sum - (sum * 0.07);
            } else if (sum > 60) {
                sum = sum - (sum * 0.12);
            } break;
        case "200X300": sum = 250;
            if (numberWindow >= 30 && numberWindow <= 60) {
                sum = sum - (sum * 0.09);
            } else if (sum > 60) {
                sum = sum - (sum * 0.14);
            } break;
    }
    sum = sum * numberWindow;
    if (receivedMethod == "With delivery") {
        sum = sum + 60;
    }
    if (numberWindow > 99) {
        sum = sum - (sum * 0.04);
        console.log(`${sum.toFixed(2)} BGN`);
    } else if (numberWindow < 10) {
        console.log(`Invalid order`);
    } else if (numberWindow >= 10 && numberWindow <= 99) {
        console.log(`${sum.toFixed(2)} BGN`);
    }
}
slove(["2",
    "130X180",
    "With delivery"])
