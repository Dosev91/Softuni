function numbers(input) {

    let arr = input[0].split(" ").map(Number);
    let sum = Number(arr.reduce((sum, x) => sum += x, 0));
    let arrlength = arr.length;
    let midSum = sum / arrlength;
    let finalArr = [];
    let step = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > midSum) {
            step++;
            finalArr.push(arr[i]);
        }
    }

    if (step == 0) {
        console.log(`No`);
    } else {
        finalArr.sort((x, y) => y - x);
        finalArr.splice(5, finalArr.length - 5)
        console.log(finalArr.join(" "));
    }

}
numbers(['5 2 3 4 -10 30 40 50 20 50 60 60 51'])
numbers(['1'])