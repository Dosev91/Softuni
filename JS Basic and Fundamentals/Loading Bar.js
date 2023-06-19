function loadingBar(numbers) {

    let arr = procents(numbers);
    let result = "";

    for (let j = 0; j < arr.length; j++) {
        result += arr[j];
    }
    if (numbers < 100) {
        console.log(`${numbers}% [${result}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`${numbers}% Complete!`);
        console.log(`[${result}]`);
    }

}
function procents(num) {

    let arr = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];

    for (let i = 10; i <= num; i += 10) {
        arr.pop();
        arr.unshift("%");
    }
    return arr;

}

loadingBar(100)