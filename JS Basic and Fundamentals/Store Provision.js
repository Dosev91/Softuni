function store(arr, arrTwo) {

    obj = {};


    for (let i = 0; i < arr.length; i += 2) {
        let quantity = Number(arr[i + 1]);
        let name = arr[i];
        obj[name] = quantity;

    }
    for (let i = 0; i < arrTwo.length; i += 2) {
        let quantity = Number(arrTwo[i + 1]);
        let name = arrTwo[i];
        if (obj.hasOwnProperty(name)) {
            obj[name] += quantity;
        } else {
            obj[name] = quantity;
        }
    } for (let key of Object.keys(obj))
        console.log(`${key} -> ${obj[key]}`)
}
store([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]

)