function slove(input) {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let step = 0;

    for (let index = 0; index < input.length; index++) {
        let help = input[index] + ""
        for (let i = 0; i < help.length; i++) {
            if (step == 0) {
                num3 = Number(help[i]);
            } else if (step == 1) {
                num2 = Number(help[i]);
            } else if (step == 2) {
                num1 = Number(help[i]);
            }
            step++;
        }
        break;
    }
    for (let a = 1; a <= num1; a++) {
        for (let x = 1; x <= num2; x++) {
            for (let y = 1; y <= num3; y++) {

                console.log(`${a} * ${x} * ${y} = ${a * x * y};`);
            }
        }
    }
}
slove(["222"])
