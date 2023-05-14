function sameNumbers(num) {

    let number = num + "";
    let test = true;
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        if (i < number.length - 1 && +number[i] !== +number[i + 1]) {
            test = false;
            sum += +number[i];
        } else {
            sum += +number[i];
        }
    }
    console.log(`${test}\n${sum}`);
}
sameNumbers(2222222);
console.log(`---------------`);
sameNumbers(1234);