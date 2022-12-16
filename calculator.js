function calculator(command, firstNum, secondNum) {
    let result = 0;

    switch (command) {
        case "add":
            result = add(firstNum, secondNum);
            break;
        case "divide":
            result = divide(firstNum, secondNum);
            break;
        case "multiply":
            result = multiply(firstNum, secondNum);
            break;
        case "subtract":
            result = subtract(firstNum, secondNum);
            break;
    }
    console.log(result);
}
function add(a, b) {
    return a + b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b
}
calculator("divide", 5, 5)