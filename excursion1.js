function excursion(input) {

    let numMountianExcursion = Number(input[1]);
    let numSeaExcursions = Number(input[0]);
    let sum = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] == "sea" && numSeaExcursions > 0) {
            sum += 680;
            numSeaExcursions--;
        } else if (input[i] == "mountain" && numMountianExcursion > 0) {
            sum += 499;
            numMountianExcursion--;
        }
    }
    if (numMountianExcursion == 0 && numSeaExcursions == 0) {
        console.log(`Good job! Everyting is sold.`);
        console.log(`Profit: ${sum} leva.`);
    } else {
        console.log(`Profit: ${sum} leva.`);
    }


}
excursion(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])

