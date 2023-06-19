function substring(word, text) {

    let arr = text.split(' ');
    let tOrF = true;

    for (const words of arr) {
        let test = words.toLowerCase();
        if (test == word) {
            console.log(`${word}`);
            tOrF = false;
            break;
        }
    }
    if (tOrF) {
        console.log(`${word} not found!`);
    }

}
substring('python',
    'JavaScript is the best programming language'

)