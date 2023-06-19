function searching(arr1, arr2) {

    let numOfArr = Number(arr2[0]);
    let deleteIndexNum = Number(arr2[1]);
    let myNum = arr2[2];
    let newArr = [];
    let numberOccurs = 0;

    for (let i = 0; i < numOfArr; i++) {
        newArr.push(arr1[i]);
        if (i < deleteIndexNum) {
            newArr.shift();
        }
    }
    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j] == myNum) {
            numberOccurs++;
        }
    }

    console.log(`Number ${myNum} occurs ${numberOccurs} times.`);
console.log(`az obicham Pencho 
nai malkoto mishlence na vselenata e Pencho
nai nai nai nai malkoto 
po malko ot nego nqma `);
}
searching([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    )