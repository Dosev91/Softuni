function pianist(input) {

    let result = {};
    let numPieces = +input[0];
    let index = 1;

    while (numPieces + 1 !== index) {
        let workArr = input[index].split("|");
        result[workArr[0]] = [workArr[1], workArr[2]];

        index++;
    }
    while (input[index] !== "Stop") {
        let [type, piece, composer, key] = input[index].split("|");
        if (type == "Add") {
            if (!result.hasOwnProperty(piece)) {
                result[piece] = [composer, key];
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (type == "Remove") {
            if (result.hasOwnProperty(piece)) {
                delete result[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (type === "ChangeKey") {
            if (result.hasOwnProperty(piece)) {
                result[piece][1] = composer;
                console.log(`Changed the key of ${piece} to ${composer}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        index++;
    }

    for (const key of Object.keys(result)) {
        console.log(`${key} -> Composer: ${result[key][0]}, Key: ${result[key][1]}`);
    }
}
pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
);