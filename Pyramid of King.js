function pyramidOfKing(base, increment) {

    let gold = 0;
    let lapis = 0;
    let marble = 0;
    let stone = 0;
    let step = 0;


    for (let i = base; i > 0; i -= 2) {
        step++;
        if (step % 5 == 0 && i >= 3) {
            if (i == 3) {
                lapis += i * i - 1;
                stone += i * i - lapis;
            } else {
                lapis += i * i - (i - 2) * (i - 2)
                stone += (i - 2) * (i - 2);
            }
        } else if (i < 3) {
            gold += i * i;
        } else {
            stone += (i - 2) * (i - 2);
            marble += i * i - (i - 2) * (i - 2);
        }

    }
    stone = stone * increment;
    marble = marble * increment;
    lapis = lapis * increment;
    gold = gold * increment;
    step = step * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step)}`);


}
pyramidOfKing(11, 1)