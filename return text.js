function printLine(text, count) {
    let result = printTriangle(text, count);

    console.log(result);
}
function printTriangle(text, count) {
    return text.repeat(count)

}
printLine("abc", 11)