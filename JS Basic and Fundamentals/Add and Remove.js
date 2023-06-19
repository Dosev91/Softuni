function addAndRemove(arr) {

    let newArr = [];
    let count = 0;

    arr.forEach(el => {
        count++;
        if (el === 'add') {
            newArr.push(count);
        } else {
            newArr.pop();
        }
    });

    if (newArr[0] === undefined) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}
addAndRemove(['add',
    'add',
    'add',
    'add'])

addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add'])

addAndRemove(['remove',
    'remove',
    'remove'])