function singCheck(num1, num2, num3) {

    let result = multiplication(num1, num2, num3);
    if (result < 0) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }

}
function multiplication(x, y, z) {
    return x * y * z;
}


singCheck(-6, -12, 14)
