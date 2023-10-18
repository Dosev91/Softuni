function simWord(word) {

    const letterArr = word.split("");
    const letterArr2 = word.split("").reverse();

    const str1 = JSON.stringify(letterArr);
    const str2 = JSON.stringify(letterArr2);

    console.log(str1 === str2);
}
simWord("level")