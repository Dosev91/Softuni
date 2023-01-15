function division(num) {

    let arr = [2, 3, 6, 7, 10];
    let result = 0;
    let test = false;

    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] == 0) {
            result = arr[i];
            test = true
        }
    }
    if (!test){
        console.log(`Not divisible`);
    }else{
        console.log(`The number is divisible by ${result}`);
    }

}
division(1643)