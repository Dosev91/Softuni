function sort(arr) {

    let array = arr.sort((b, a) => b.length - a.length)

    for (let i = 1; i < array.length; i++) {
        let parm1 = array[i];
        let param2 = array[i - 1];
        if (parm1.length == param2.length) {
            let miniarr = [array[i], array[i + 1]];
            miniarr = miniarr.sort((a, b) => a - b);
            array[i] = miniarr[0];
            array[i + 1] = miniarr[1];
        }

    }

    for (item of array) {
        console.log(item);

    }

}
sort(['test', 'omen', 'Deny', 'Default'])