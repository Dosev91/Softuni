

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomWord(arr) {

    let word = arr[Math.floor(Math.random() * arr.length)]
    return word;

}

let names = ["Lorcheto", "Hristiqn", "Nikola", "Dimitur", "Ioncheto"];
let places = ["Lisec", "ESA", "Bakoici", "Shumeli", "Dubai"];
let verbs = ["eats", "sees", "brings", "find", "plays with"];
let nouns = ["balls", "car", "lemon", "someone's hand", "mice"];
let adverbs = ["warmly", "oddly", "strangely", "wonderfully", "quickly"];
let details = ["near the park", "under the bridge", "in the cafe"]

let randomName = getRandomWord(names);
let randomPlace = getRandomWord(places);
let randomVerbs = getRandomWord(verbs);
let randomNouns = getRandomWord(nouns);
let randomAdverbs = getRandomWord(adverbs);
let randomDetails = getRandomWord(details);

let action = `${randomVerbs} ${randomAdverbs} ${randomNouns}`
let who = `${randomName} from ${randomPlace}`
let sentence = `${who} ${action} ${randomDetails}!`

console.log(sentence)

let recursiveAsyncReadLine = function () {
    readline.question(`Click [Enter] to get generate a new one. `, string => {

    })

}

