function slove(input) {
    let nameAct = input[0];
    let points = Number(input[1]);
    let numberJuri = Number(input[2]);
    let nameLength = 0;

    for (let i = 3; i < input.length; i += 2) {
        for (let j = 0; j < input[i].length; j++) {
            nameLength++
        }
        points = points + ((nameLength * input[i + 1]) / 2);
        nameLength = 0;
        if (points > 1250.5) {
            console.log(`Congratulations, ${nameAct} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }
    let neededPoints = 1250.5 - points;
    if (points < 1250.5) {
        console.log(`Sorry, ${nameAct} you need ${neededPoints.toFixed(1)} more!`);
        
    }

}
slove(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])

