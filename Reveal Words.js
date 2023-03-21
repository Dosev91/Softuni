function reveal(inputOne, inputTwo) {

    let arr = inputOne.split(', ')
    let sentences = inputTwo;

    for (let i = 0; i < arr.length; i++) {
        let wordLength = arr[i].length;
        let symbol = '*'.repeat(wordLength);
        sentences = sentences.replace(symbol, arr[i]);
    }
console.log(`${sentences}`);
}
reveal('great',
    'softuni is ***** place for learning new programming languages'

)