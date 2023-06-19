function slove(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishеrmen = Number(input[2]);
    let sum = 0;

    switch (season) {
        case "Spring":
            if (fishеrmen <= 6) {
                sum = 3000 - ((10 / 100) * 3000);
            } else if (fishеrmen > 6 && fishеrmen <= 11) {
                sum = 3000 - ((15 / 100) * 3000);
            } else {
                sum = 3000 - ((25 / 100) * 3000);
            } if (fishеrmen % 2 === 0) {
                sum = sum - ((5 / 100) * sum);
            } break;
        case "Summer":
            if (fishеrmen <= 6) {
                sum = 4200 - ((10 / 100) * 4200);
            } else if (fishеrmen > 6 && fishеrmen <= 11) {
                sum = 4200 - ((15 / 100) * 4200);
            } else {
                sum = 4200 - ((25 / 100) * 4200);
            } if (fishеrmen % 2 === 0) {
                sum = sum - ((5 / 100) * sum);
            } break;
        case "Autumn":
            if (fishеrmen <= 6) {
                sum = 4200 - ((10 / 100) * 4200);
            } else if (fishеrmen > 6 && fishеrmen <= 11) {
                sum = 4200 - ((15 / 100) * 4200);
            } else {
                sum = 4200 - ((25 / 100) * 4200);
            } break;
        case "Winter":
            if (fishеrmen <= 6) {
                sum = 2600 - ((10 / 100) * 2600);
            } else if (fishеrmen > 6 && fishеrmen <= 11) {
                sum = 2600 - ((15 / 100) * 2600);
            } else {
                sum = 2600 - ((25 / 100) * 2600);
            } if (fishеrmen % 2 === 0) {
                sum = sum - ((5 / 100) * sum);
            } break;
    }
    let totalSum = 0;
    if (sum < budget) {
        totalSum = budget - sum;
        console.log(`Not enough money! You need ${totalSum.toFixed(2)} leva.`);
    } else {
        totalSum = sum - budget;
        console.log(`Yes! You have ${totalSum.toFixed(2)} leva left.`);
    }


}
slove(["3600", "Autumn", "6"])

