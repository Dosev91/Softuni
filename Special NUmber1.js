function slove(input) {
    let n = Number(input[0]);
    let magicNum = "";

    for (let i = 1111; i <= 9999; i++) {
        i = i + "";
        if (n % i[0] == 0 && n % i[1] == 0 && n % i[2] == 0 && n % i[3] == 0) {
            magicNum += i + " "
        }

    }
    console.log(magicNum);
}
slove(["16"])
