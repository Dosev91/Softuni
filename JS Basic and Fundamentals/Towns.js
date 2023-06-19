function towns(arrs) {


    let obj = {};

    for (let i = 0; i < arrs.length; i++) {
        let arr = arrs[i].split(" | ");
        arr[2] = Number(arr[2]).toFixed(2);
        arr[1] = Number(arr[1]).toFixed(2);
        obj = {
            town: arr[0],
            latitude: arr[1],
            longitude: arr[2]
        }
        console.log(obj);
    }

}
towns(['Plovdiv | 136.45 | 812.575']
)