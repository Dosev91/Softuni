function wordsTracker(input) {

    let wordsOne = input[0].split(" ")[0];
    let wordsTwo = input[0].split(" ")[1];
    let wordsNum = {};
    let stepOne = 0;
    let stepTwo = 0;

    for (const key of input) {
        if (key === wordsOne) {
            stepOne++;
            wordsNum[key] = stepOne;
        } else if (key === wordsTwo) {
            stepTwo++;
            wordsNum[key] = stepTwo;
        }
    }
    let arr = [];
    for (var vehicle in wordsNum) {
        arr.push([vehicle, wordsNum[vehicle]]);
    }

    arr.sort((a, b) => b[1] - a[1]);

    for (const key of arr) {
        console.log(`${key[0]} - ${wordsNum[key[0]]}`);
    }

}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]

)