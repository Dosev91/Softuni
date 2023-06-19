function palindromeIntegers(arr) {


    for (let i = 0; i < arr.length; i++) {
        let element = arr[i] + "";
        let lastIndex = element.length;
        for (let j = 0; j < element.length / 2; j++) {
            if (lastIndex == 1) {
                console.log(`true`);
                break;
            }
            if (Number(element[j]) == backWords(lastIndex, element)) {
                console.log(`true`);
                break;
            } else {
                console.log(`fause`);
                break;
            }
        }
    }
}
function backWords(lastIndex, element) {

    for (let j = lastIndex - 1; j > element.length / 2; j--) {
        return element[j];

    }
}

palindromeIntegers([123,323,421,121])