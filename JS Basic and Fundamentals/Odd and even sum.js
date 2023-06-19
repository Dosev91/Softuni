function oddAndEvenSum(num) {

    let arr = num + "";
    let odd = 0;
    let even = 0;


    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) {
            even = sum(even, Number(arr[i]));
        } else {
            odd = sum(odd, Number(arr[i]));
        }
    }
    console.log(`Odd sum = ${odd} , Even sum = ${even}`);

} function sum(x, y) {
    return x + y;

}
oddAndEvenSum(3495892137259234)