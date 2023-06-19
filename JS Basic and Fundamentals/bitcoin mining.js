function bitcoinMining(input) {

    let bitcoinPrice = 11949.16;
    let gramOfGold = 67.51;
    let step = 0;
    let goldOfshift = 0;
    let totalMoney = 0;
    let bitcoin = 0;
    let dayOfFirst = 0;

    for (let i = 0; i < input.length; i++) {
        step++;
        if (step % 3 == 0) {
            goldOfshift = input[i] * gramOfGold;
            goldOfshift = goldOfshift - (goldOfshift * 0.3);
            totalMoney += goldOfshift;
            if (totalMoney >= bitcoinPrice && bitcoin == 0) {
                dayOfFirst = step;
                while (totalMoney >= bitcoinPrice) {
                    bitcoin++;
                    totalMoney -= bitcoinPrice;
                }
            }
            else if (totalMoney >= bitcoinPrice) {
                while (totalMoney >= bitcoinPrice) {
                    bitcoin++;
                    totalMoney -= bitcoinPrice;
                }
            }
        } else {
            totalMoney += input[i] * gramOfGold;
            if (totalMoney >= bitcoinPrice && bitcoin == 0) {
                dayOfFirst = step;
                while (totalMoney >= bitcoinPrice) {
                    bitcoin++;
                    totalMoney -= bitcoinPrice;
                }
            } else if (totalMoney >= bitcoinPrice) {
                while (totalMoney >= bitcoinPrice) {
                    bitcoin++;
                    totalMoney -= bitcoinPrice;
                }
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (dayOfFirst !== 0) {
        console.log(`Day of first purchased bitcoin: ${dayOfFirst}`);
    }
    console.log(`Left Money: ${totalMoney.toFixed(2)}lv.`);
}
bitcoinMining([100, 200, 300])
