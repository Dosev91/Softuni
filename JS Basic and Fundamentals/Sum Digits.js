function solve(num) {

    let numbers = num + "";
    result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += Number(numbers[i]);

    }
    console.log(result);


}
solve([543])