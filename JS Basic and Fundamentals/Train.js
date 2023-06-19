function train(input) {

    let wagons = input[0].split(" ");
    let maxPassengers = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let comands = input[i].split(" ");
        if (comands[0] == 'Add') {
            wagons.push(comands[1]);
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (Number(wagons[j]) + Number(input[i]) <= maxPassengers) {
                    wagons[j] = Number(wagons[j]) + Number(input[i]);
                    break;
                }

            }
        }
    }
    console.log(wagons.join(" "));
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)