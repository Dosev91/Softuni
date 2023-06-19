function slove(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let sum = 0;

    for (let i = a; i <= b; i++) {
        for (let j = i + 1; j <= b; j++) {
            for (let k = j + 1; k <= b; k++) {
                for (let l = k + 1; l <= b; l++) {
                    console.log(`${i} ${j} ${k} ${l}`);
                    sum++
                }
            }
        }
    }if ( sum == 0 ){
        console.log(`No`);
    }




}
slove(['5', '9'])