function rotateArray(arr, count) {

    let workArr = arr;

    for (let i = 0; i < count; i++) {
        workArr.unshift(workArr[workArr.length - 1]);
        workArr.pop();
    }
    console.log(workArr.join(" "));

}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2)

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
)