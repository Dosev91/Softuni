function sortArr(arr, type) {

    const dict = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    }
    return arr.sort(dict[type]);

}
sortArr([14, 7, 17, 6, 8], 'asc')
console.log(`-----------------`);
sortArr([14, 7, 17, 6, 8], 'desc')