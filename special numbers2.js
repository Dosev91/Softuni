function slove(input) {
    let magicNum = Number(input[0]);
    let result = "";


    for (let numbers = 1111; numbers < 9999; numbers++) {
        numbers = numbers + "";
        for (let j = 0; j < numbers.length; j++) {
            if (magicNum % Number(numbers[j]) == 0 && magicNum % Number(numbers[j + 1]) == 0 && magicNum % Number(numbers[j + 2]) == 0 && magicNum % Number(numbers[j + 3]) == 0) {
                result += numbers + " ";
                break;
            }

        }

    }
    console.log(result);

}


slove(["16"])