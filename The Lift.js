function lift(input) {

    let howManyPeople = Number(input[0]);
    let arrCurrentState = input[1].split(" ").map(Number);

    for (let i = 0; i < arrCurrentState.length; i++) {
        if (howManyPeople === 0) {
            break;
        }
        for (let j = 0; j <= 4; j++) {
            if (howManyPeople === 0) {
                break;
            }
            if (arrCurrentState[i] < 4) {
                arrCurrentState[i] += 1;
                howManyPeople--;
            } else {
                break;
            }
        }
    }
    if (arrCurrentState[arrCurrentState.length - 1] == 4 && howManyPeople == 0) {
        console.log(`${arrCurrentState.join(" ")}`);
    } else if (arrCurrentState[arrCurrentState.length - 1] < 4) {
        console.log(`The lift has empty spots!`);
        console.log(`${arrCurrentState.join(" ")}`);
    } else {
        console.log(`There isn't enough space! ${howManyPeople} people in a queue!`);
        console.log(`${arrCurrentState.join(" ")}`);
    }

}
lift([
    "15",
    "0 0 0 0"
])