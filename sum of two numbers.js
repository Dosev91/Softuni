function slove(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combination = 0;
    let test = false;

    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            combination++;
            if (i + j == magicNum) {
                test = true;
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                break;
            }
        } if (test == true) {
            break;
        }
    }
    if (test == false) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
slove(["88",
    "888",
    "2000"])



