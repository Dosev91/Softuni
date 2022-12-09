function slove(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1])
    let sum = num1 * num2;
    let row = 1;
    let col = 1;
    let value = 0;

    var arr = [];
    for (let index = 1; index <= num1; index++) {
        arr.push([])
    }
    for (let v = 1; v <= num1; v++) {
        value += v;
    }
    let averageValue = value / num1 - 1;
    for (let numbers1 = sum; numbers1 >= 1; numbers1--) {
        if (numbers1 == 16) {
            break;
        }
        if (numbers1 <= sum && numbers1 > sum - 2) {
            arr[averageValue].unshift(numbers1);
            if (num1 < 5) {
                break;
            }
        } if (numbers1 <= sum - 2 && numbers1 > sum - num1) {
            arr[averageValue + 1].push(numbers1);
        } if (numbers1 <= sum - 5 && numbers1 > sum - 7) {
            arr[averageValue].push(numbers1);
            averageValue--;
        } if (numbers1 <= sum - 7 && numbers1 > sum - 9) {
            averageValue = value / num1 - 2;
            arr[averageValue].unshift(numbers1);
        }
    }
    for (let numbers = 1; numbers <= sum; numbers++) {
        if (numbers <= num1) {
            arr[0].push(numbers);
        } if (numbers < num1 + num2 && numbers > num1) {
            arr[col].push(numbers);
            col++
        } if (numbers >= num1 + num2 && row < num1) {
            arr[num1 - 1].unshift(numbers);
            row++;
            col = num1 - 2;
        } if ((num1 * 3) - 1 <= numbers && (num1 * 4) - 4 >= numbers) {
            arr[col].unshift(numbers);
            col--;
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
        if (j == num2 - 1) {
            break;
        }
    }
}


slove(["5", "5"])

//  1 2 3     1 2 3 4 5
//  8 9 4    16 17 18 19 6
//  7 6 5    15 24 25 20 7
//           14 23 22 21 8
//           13 12 11 10 9