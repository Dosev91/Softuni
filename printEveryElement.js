function everyElement(arr, step) {

    let workArr = [];

    for (let i = 0; i < arr.length; i += step) {
        workArr.push(arr[i]);
    }

    return workArr;
}
everyElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)

everyElement(['dsa',
    'asd',
    'test',
    'tset'],
    2)

everyElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6)