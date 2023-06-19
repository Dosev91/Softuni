function extract(arr) {

    let workArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > workArr[workArr.length - 1]) {
            workArr.push(arr[i]);
        }
    }
    return workArr;
}
extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])
extract([1,
    2,
    3,
    4])
extract([20,
    3,
    2,
    15,
    6,
    1])