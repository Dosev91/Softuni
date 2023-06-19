function delivery(input) {

    let neighborhoodArr = input[0].split('@').map(Number);
    let step = 0;
    let houseNumber = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "Love!") {
            break;
        }
        let workArr = input[i].split(' ')
        houseNumber += Number(workArr[1]);
        if (houseNumber > neighborhoodArr.length - 1) {
            houseNumber = 0;
            if (neighborhoodArr[0] > 0) {
                neighborhoodArr[0] -= 2;
                if (neighborhoodArr[0] <= 0) {
                    console.log(`Place ${houseNumber} has Valentine's day.`);
                } else {
                    neighborhoodArr[0] -= 2;
                }
            } else {
                console.log(`Place ${houseNumber} already had Valentine's day.`);
            }
        } else {
            if (neighborhoodArr[houseNumber] > 0) {
                neighborhoodArr[houseNumber] -= 2;
                if (neighborhoodArr[houseNumber] <= 0) {
                    console.log(`Place ${houseNumber} has Valentine's day.`);
                }
            } else {
                console.log(`Place ${houseNumber} already had Valentine's day.`);
            }
        }
    }
    console.log(`Cupid's last position was ${houseNumber}.`);
    let houseCount = 0;
    for (let j = 0; j < neighborhoodArr.length; j++) {
        if (neighborhoodArr[j] > 0) {
            houseCount++;
        }
    }
    if (houseCount == 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }

}
delivery(["6@6",
"Jump 1",
"Jump 1",
"Jump 1",
"Jump 1",
"Jump 1",
"Jump 1",
"Jump 1",
"Jump 1",
"Love!"])



