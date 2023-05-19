function magicMatrix(arrOfArr) {

    let oneLineOfMatrix = arrOfArr[0].reduce((acc, num) => acc += num);
    let test = true;

    for (let i = 0; i < 3; i++) {
        if (arrOfArr[i].reduce((acc, num) => acc += num) !== oneLineOfMatrix &&
            arrOfArr[0][i] + arrOfArr[1][i] + arrOfArr[2][i] !== oneLineOfMatrix) {
            test = false;
        }
    }
    if (test) {
        console.log('true');
    } else {
        console.log('false');
    }
}
magicMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])
magicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]])
magicMatrix([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])