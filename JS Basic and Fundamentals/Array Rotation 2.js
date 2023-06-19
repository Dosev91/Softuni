function rotation(arr, numOfRotation) {

    let rotationsArray = arr;

    for (let i = 0; i < numOfRotation; i++) {

        rotationsArray.push(rotationsArray[0]);
        rotationsArray.shift([0])

    }
    console.log(array(rotationsArray));

    function array(x) {

        let result = "";

        for (let i = 0; i < x.length; i++) {
            result += x[i] + " "
        }
        return result;
    }
}
rotation([51, 47, 32, 61, 21], 2)