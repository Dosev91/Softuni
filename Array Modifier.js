function arrayModifier(input) {

    let serialNumber = input[0].split(" ").map(Number);

    for (let i = 1; i < input.length; i++) {
        let workArr = input[i].split(" ");

        if (workArr[0] == "swap") {
            let num1 = +serialNumber[+workArr[1]];
            let num2 = +serialNumber[+workArr[2]];
            serialNumber.splice(workArr[1], 1, num2);
            serialNumber.splice(workArr[2], 1, num1);
        } else if (workArr[0] == "multiply") {
            let num1 = +serialNumber[+workArr[1]];
            let num2 = +serialNumber[+workArr[2]];
            serialNumber.splice(workArr[1], 1, num1 * num2);
        } else if (workArr[0] == "decrease") {
            for (let i = 0; i < serialNumber.length; i++) {
                serialNumber[i]--;
            }
        } else if (workArr[0] == "end") {
            console.log(serialNumber.join(", "));
        }
    }

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
console.log("+++++++++++++++++++++++++++++++++");
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])