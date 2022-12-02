function slove(input) {
    let bestPlayer = input[0];
    let goals = Number(input[1]);
    for (let i = 2; i < input.length; i++) {
        if (input[i] == "END") {
            break;
        } else if (i % 2 == 0 && input[i + 1] > goals) {
            bestPlayer = input[i];
            goals = Number(input[i + 1])
        }
    }
    console.log(`${bestPlayer} is the best player!`);

    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${goals} goals.`);
    }

    // RONALDO is the BEST PLAYER !!!

}
slove(["Neymar", "2",
    "Ronaldo",
    "11",
    "Messi",
    "3",
    "END"])




