function slove(input) {
    let sum = Number(input[0]) * Number(input[1]);
    var arr = [
        [],
        [],
        []
    ];

    for (let numbers = 1; numbers <= sum; numbers++) {
        if (numbers <= Number(input[0])) {
            arr[0].push(numbers);
        } else if (numbers == Number(input[0]) + 1) {
            arr[1].push(numbers);
        } else if (numbers >= Number(input[0]) + 2 && numbers <= Number(input[0]) + 4) {
            arr[2].unshift(numbers);
        } else if (numbers == sum - 1) {
            arr[1].unshift(sum);
            arr[1].unshift(numbers);
            break;
        }
    }
    let result = "";
    let array = 0;
    
        for (let j = 0; j < arr.length; j++) {
            array = arr[j]
            for (let k = 0; k < array.length; k++) {
                result += " " + array[k] + " "
            }
            console.log(result);
            result = "";
            if (j == 2){
                break;
            }
        }
}
slove(["3", "3"])