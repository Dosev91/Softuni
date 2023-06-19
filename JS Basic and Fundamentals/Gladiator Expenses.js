function gladiator(countLost, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let sum = 0;

    let steps = 0

    for (let i = 1; i <= countLost; i++) {

        if (i % 2 == 0 && i % 3 == 0) {
            sum += helmetPrice + shieldPrice + swordPrice;
            steps++;
            if (steps % 2 == 0 && steps !== 0) {
                sum += armorPrice;
                steps = 0;
            }
        } else if (i % 2 == 0) {
            sum += helmetPrice;
        } else if (i % 3 == 0) {
            sum += swordPrice;
        }

    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}
gladiator(23,
    12.50,
    21.50,
    40,
    200

)