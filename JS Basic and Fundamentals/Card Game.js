function cardGame(input) {

    let people = {};
    let cards = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    let typeCards = [];

    for (const key of input) {
        let namePlayer = key.split(': ')[0];
        let workArr = key.split(': ')[1].split(', ');
        let points = 0;
        if (people.hasOwnProperty(namePlayer) == false) {
            people[namePlayer] = 0;
            typeCards[namePlayer] = [];
        }
        for (const kard of workArr) {
            let test = typeCards[namePlayer].includes(kard);
            if (test == true) {
            } else {
                let multiple = kard[kard.length - 1];
                let power = kard.slice(0, kard.length - 1)
                points = cards[power] * cards[multiple];
                people[namePlayer] += points;
                typeCards[namePlayer].push(kard);
            }
        }
    }
    for (const [key, value] of Object.entries(people)) {
        console.log(`${key}: ${value}`);

    }


}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]    
)