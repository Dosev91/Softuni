function bomb(arr1, arr2) {

    let certanPower = arr2[1];
    let bombNumber = arr2[0];
    let step = 0;

    let finaleArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == bombNumber) {
            for (let j = step; j > step - certanPower; j--) {
                finaleArr.pop();

            }
            i = i + certanPower;
            step = step - certanPower;
        } else {
            finaleArr.push(arr1[i]);
        }

    }
    console.log(finaleArr.reduce((a, b) => a + b));
}
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
    
    )