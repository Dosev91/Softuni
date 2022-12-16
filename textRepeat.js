function printLine(text, num) {
    let result = "";

    for (let i = 1; i <= num; i++) {
        result += text
    }
    console.log(result);
}
printLine("abc", 4)