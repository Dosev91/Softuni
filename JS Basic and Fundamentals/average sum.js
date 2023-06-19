function slove(input) {
    let nameStudent = input[0];
    let numberClass = 0;
    let sumAverage = 0;
    let excluded = false;

    for (let i = 1; i < input.length; i++) {
        if (Number(input[i]) == 2) {
            numberClass++;
            excluded = true;
            break;
        } else {
            sumAverage += Number(input[i]);
            numberClass++;
        }
    }
    let average = sumAverage / numberClass;
    if (excluded == true) {
        console.log(`${nameStudent} has been excluded at ${numberClass} grade`);
    } else {
        console.log(`${nameStudent} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
slove(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])









