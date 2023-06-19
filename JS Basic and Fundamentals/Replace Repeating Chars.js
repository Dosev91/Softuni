function replace(text) {

    let word = text[0];
    let test = text[0];
    let num = 0;

    for (i = 1; i < text.length; i++) {
        if (test == text[i] && text[i] !== text[0]) {
            if (num == 0) {
                word += text[i];
                num++;
            }
        } else {
            test = text[i];
            num = 0;
            if (test !== text[i - 1] && test !== text[i + 1]) {
                word += text[i];
            }
        }
    }
    console.log(word);
}
replace('aaaaabbbbbcdddeeeedssaa')