function guineaPig(input) {

    let food = input[0] * 1000;
    let hay = input[1] * 1000;
    let cover = input[2] * 1000;
    let weight = input[3] * 1000;
    let test = false;

    for (let i = 1; i < 31; i++) {
        food -= 300;
        if (i % 2 === 0) {
            hay -= ((food / 100) * 5);
        }
        if (i % 3 === 0) {
            cover -= (weight / 3);
        }
        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log(`Merry must go to the pet store!`);
            test = true;
            break;
        }
    }
    if (test == false) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }

}
guineaPig(["10",
    "5",
    "5.2",
    "1"])


