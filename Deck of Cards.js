function deckOfCards(input) {

    let myCards = input[0].split(", ");
    let numComands = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let workArr = input[i].split(", ");
        if (workArr[0] == "Add") {
            let test = myCards.includes(workArr[1]);
            if (test == false) {
                console.log(`Card successfully added`);
                myCards.push(workArr[1]);
            } else {
                console.log(`Card is already in the deck`);
            }
        } else if (workArr[0] === "Remove") {
            let test = myCards.includes(workArr[1]);
            if (test == true) {
                let index = myCards.indexOf(workArr[1]);
                myCards.splice(index, 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Card not found`);
            }
        } else if (workArr[0] == "Remove At") {
            if (Number(workArr[1]) >= 0 && Number(workArr[1]-1) < myCards.length) {
                myCards.splice(workArr[1], 1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Index out of reange`);
            }
        } else if (workArr[0] == "Insert") {
            if (Number(workArr[1]) >= 0 && Number(workArr[1]-1) < myCards.length) {
                let test = myCards.includes(workArr[2]);
                if (test == true) {
                    console.log(`Card is already added`);
                } else {
                    myCards.splice(workArr[1], 0, workArr[2]);
                    console.log(`Card successfully added`);
                }
            } else {
                console.log(`Index out of range`);
            }
        }
    }
    console.log(myCards.join(", "));
}
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"])






