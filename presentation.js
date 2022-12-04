function slove(input) {
    let teachers = Number(input[0]);
    let presentation = input[1]
    let totalSum = 0;
    let sum = 0;
    let step = 1;
    let totalStep = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] == "Finish") {
            console.log(`Student's final assessment is ${(totalSum / totalStep).toFixed(2)}.`);
            break;
        }
        step++;
        sum += Number(input[i]);
        if (step > teachers) {
            totalStep += teachers;
            console.log(`${presentation} - ${(sum / teachers).toFixed(2)}.`);
            totalSum += sum;
            sum = 0;
            presentation = input[i + 1];
            step = 0;
        } if (input[i] == presentation) {
            step = 1;
            sum = 0;

        }


    }

}
slove(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])


