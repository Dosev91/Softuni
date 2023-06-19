function slove(input) {
    let days = Number(input[0]) - 1;
    let rooms = input[1];
    let rating = input[2];
    let sumOnePerson = days * 18;
    let sumAparment = days * 25;
    let sumPresident = days * 35;
    let sum = 0;

    switch (rooms) {
        case "apartment":
            if (days < 10) {
                sum = sumAparment - ((30 / 100) * sumAparment);
            } else if (days >= 10 && days <= 15) {
                sum = sumAparment - ((35 / 100) * sumAparment);
            } else {
                sum = sumAparment - ((50 / 100) * sumAparment);
            } break;
        case "president apartment":
            if (days < 10) {
                sum = sumPresident - ((10 / 100) * sumPresident);
            } else if (days >= 10 && days <= 15) {
                sum = sumPresident - ((15 / 100) * sumPresident);
            } else {
                sum = sumPresident - ((20 / 100) * sumPresident);
            } break;
        case "room for one person": console.log(sumOnePerson.toFixed(2)); break;
    }
    let totalSum = 0;
    if (rating === "positive") {
        totalSum = sum + ((25 / 100) * sum);
    } else {
        totalSum = sum - ((10 / 100) * sum);
    }
    console.log(totalSum.toFixed(2));

}
slove(["30",
"president apartment",
"negative"])



