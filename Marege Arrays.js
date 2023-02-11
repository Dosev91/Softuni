function newArr(arr1, arr2) {

    let merageArr = [];
    let sum = 0

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            sum += Number(arr1[i]) + Number(arr2[i]);
        } else {

            sum += arr1[i] + arr2[i];
        }
        if (i == arr1.length - 1) {
            break;
        } else {
            sum += ' ' + '-' + ' ';
        }
    } console.log(sum);
}
newArr(['13', '12312', '5', '77', '4','45'],
    ['22', '333', '5', '122', '44','45']);