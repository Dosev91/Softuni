function slove(input) {
    let money = Number(input[0]);
    let dead = Number(input[1]);
    let age = 18;
    let sum = 0;
    for (let i = 1800; i <= dead; i++) {
        if (i % 2 == 0) {
            age++
            sum += 12000;
        } else {
            sum = sum + (12000 + (50 * age));
            age++
        }
    }

    if (money >= sum) {
        let totalSum = money - sum;
        console.log(`Yes! He will live a carefree life and will have ${totalSum.toFixed(2)} dollars left.`);
    } else {
        totalSum = sum - money;
        console.log(`He will need ${totalSum.toFixed(2)} dollars to survive.`);
    }


}
slove(["100000.15", "1808"])