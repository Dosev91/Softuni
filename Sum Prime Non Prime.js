function slove(input) {
    let sum = 0;
    let nonPrimeNum = 0;
    let prime = 0;
    let rotation = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "stop") {
            break;
        }
        for (let j = 2; j < 10; j++) {
            if (Number(input[i] == 1)) {
                nonPrimeNum += input[i];
                break;
            } else if (Number(input[i]) == 2) {
                prime += Number(input[i]);
                break;
            } else if (Number(input[i]) < 0) {
                console.log(`Number is negative.`);
                break;
            }
            rotation++
            if (Number(input[i]) % 1 == 0 && Number(input[i]) % Number(input[i]) == 0 && Number(input[i]) % j == 0 && j !== Number(input[i])) {
                nonPrimeNum += Number(input[i]);
                rotation = 0;
                break;
            } if (rotation == 8) {
                prime += Number(input[i]);
                rotation = 0;
            }

        }

    }
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);

}
slove(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])
