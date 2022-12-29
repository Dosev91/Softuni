function matrix(num) {

    let matrix = arr(num);
    let result = "";

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            matrix[i].push(Number(num));

        }
    }
    for (let j = 0; j < matrix.length; j++) {
        let array2 = matrix[j];
        for (let k = 0; k < array2.length; k++) {
            result += " " + array2[k] + " ";
        }
        console.log(result);
        result = "";
    }


}
function arr(longest) {

    let array = [];
    for (let i = 0; i < longest; i++) {
        array.push([]);
    }
    return array
}
matrix(7)