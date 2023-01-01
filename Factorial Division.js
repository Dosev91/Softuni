function factorialDivision(num1, num2) {

    let outPut = loopOne(num1) / loopTwo(num2);
    console.log(outPut.toFixed(2));

}

function loopOne(x) {

    let result = x;
    for (let i = x - 1; i > 1; i--) {
        result = result * i;
    }
    return result;

}

function loopTwo(y) {


    let result = y;
    for (let i = y - 1; i > 1; i--) {
        result = result * i;
    }
    return result;

}
factorialDivision(6, 2)