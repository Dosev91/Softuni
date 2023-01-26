function magicSum(arr, magSum) {

    let set = new Set();

    for (item of arr) {
        let num = magSum - item;
        if (set.has(num)) {
            console.log(num + " " + item);

        }
        set.add(item);
    }

}
magicSum([1, 2, 3, 4, 5, 6], 6); 