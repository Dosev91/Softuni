function sortingNumbers(input) {

    let arr = input.sort((a, b) => a - b);
    let finalArr = [];

    while (arr.length !== 0) {
        let a = arr.pop();
        let b = arr.shift();
        finalArr.push(b, a);
        
    }
return finalArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])