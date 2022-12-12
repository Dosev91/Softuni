function slove(input) {
    let destination = input[0];
    let date = input[1];
    let nights = Number(input[2]);
    let sum = 0;

    switch (destination) {
        case "France":
            if (date == "21-23") {
                sum = 30;
            } else if (date == "24-27") {
                sum = 35;
            } else {
                sum = 40;
            }
            break;
        case "Italy":
            if (date == "21-23") {
                sum = 28;
            } else if (date == "24-27") {
                sum = 32;
            } else {
                sum = 39;
            }
            break;
        case "Germany":
            if (date == "21-23") {
                sum = 32;
            } else if (date == "24-27") {
                sum = 37;
            } else {
                sum = 43;
            }
            break;
    }
    let moneyForЕxcursion = nights * sum


    console.log(`Easter trip to ${destination} : ${moneyForЕxcursion.toFixed(2)} leva."`);
}
slove(["France", "28-31", "8"])
