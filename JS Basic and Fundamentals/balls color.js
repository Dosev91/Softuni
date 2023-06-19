function slove(input) {
    let numberBalls = Number(input[0]);
    let sum = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let other = 0;
    let black = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] == "red") {
            red++;
            sum += 5;
        } else if (input[i] == "orange") {
            orange++;
            sum += 10;
        } else if (input[i] == "yellow") {
            yellow++;
            sum += 15;
        } else if (input[i] == "white") {
            white++;
            sum += 20;
        } else if (input[i] == "black") {
            black++
            sum = Math.floor(sum / 2);
        } else {
            other++;
        }

    }

    console.log(`Total points: ${sum}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${other}`);
    console.log(`Divides from black balls: ${black}`);
}
slove(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])

