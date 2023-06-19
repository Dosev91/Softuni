function solve(num) {

    let sum = "";

    for (let i = 1; i <= num; i++) {
        if (i == 1) {
            console.log(i);
        } else {
            for (let j = 0; j <= i - 1; j++) {
                sum += i + " ";

            }
            console.log(sum);
            sum = "";
        }

    }

}
solve(5)