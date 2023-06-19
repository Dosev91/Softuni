function printLine(command, firstNumbre, secondNumber) {
    let result = 0;

    switch (command) {
        case "add":
            result = add(firstNumbre, secondNumber)
            break;
    }

    console.log(result);

}
function add(a, b) {
    return a + b;
}
printLine("add",2,11)
