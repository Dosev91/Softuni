function manipulator(arr, arr2) {

    let workArr = arr;
    let testArr = [];
    let result = '';

    for (let i = 0; i < arr2.length; i++) {
        let action = arr2[i].split(' ');
        switch (action[0]) {
            case 'add':
                workArr.splice(Number(action[1]), 0, Number(action[2]));
                break;
            case 'addMany':
                let index = Number(action[1]);
                for (let j = 2; j < action.length; j++) {
                    workArr.splice(index, 0, Number(action[j]));
                    index++;
                }
                break;
            case 'contains':
                let test = 0;
                test = workArr.includes(Number(action[1]));
                if (test == true) {
                    console.log(workArr.indexOf(Number(action[1])));
                } else {
                    console.log(-1);
                }
                break;
            case 'remove':
                workArr.splice(Number(action[1]), 1);
                break;
            case 'shift':
                for (let k = 0; k < action[1]; k++) {
                    workArr.push(workArr[0]);
                    workArr.shift();
                }
                break;
            case 'sumPairs':
                for (let m = 0; m < workArr.length; m += 2) {
                    let sum = Number(workArr[m]) + Number(workArr[m + 1]);
                    if (m + 2 > workArr.length) {
                        testArr.push(workArr[m])
                    } else {
                        testArr.push(sum);
                    }
                }
                workArr = testArr;
                testArr = [];
                break;
            case 'print':
            //  for (let h = 0; h < workArr.length; h++) {
            //     if (h + 1 > workArr.length) {
            //         result += workArr[h];
            //     } else {
            //         result += workArr + ',' + ' ';
            //     }
            //     break;
            //}
        }

    }



    console.log(workArr);

}
manipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]

)