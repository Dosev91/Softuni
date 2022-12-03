function slove(input) {
    let destination = input[0];
    let minimalBudget = Number(input[1]);
    let spendMoney = 0;

    for (let i = 2; i < input.length; i++) {
        if ((input[i] !== destination) && (minimalBudget !== Number(input[i]))) {
            spendMoney += Number(input[i]);
        }
        if (input[i] == "End") {
            break;
        }
        if (spendMoney >= minimalBudget) {
            console.log(`Going to ${destination}!`);
            minimalBudget = Number(input[i + 2]);
            destination = input[i + 1];
            spendMoney = 0;
        }
    }

}
slove(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])

