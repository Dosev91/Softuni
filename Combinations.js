function slove(input) {
    let num = Number(input[0]);
    let numSolution = 0;

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            for (let k = 0; k <= num; k++) {
                if (i + j + k == num) {
                    numSolution++;
                }
            }

        }

    }
    console.log(numSolution);
}
slove(["5"])
