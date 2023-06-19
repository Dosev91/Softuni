function inventory(input) {

    let inven = input[0].split(", ");

    for (let i = 1; i < input.length; i++) {
        if (input[i] === "Craft") {
            break;
        }
        let workArr = input[i].split(' - ')
        if (workArr[0] == "Collect") {
            let test = inven.includes(workArr[1]);
            if (test == false) {
                inven.push(workArr[1]);
            }
        } else if (workArr[0] == "Drop") {
            let test = inven.includes(workArr[1]);
            let index = inven.indexOf(workArr[1]);
            if (test == true) {
                inven.splice(index, 1);
            }
        } else if (workArr[0] == 'Combine Items') {
            let splitArr = workArr[1].split(':');
            let test = inven.includes(splitArr[0]);
            let index = inven.indexOf(splitArr[0]);
            if (test == true) {
                inven.splice(index + 1, 0, splitArr[1]);
            }
        } else if (workArr[0] == "Renew") {
            let test = inven.includes(workArr[1]);
            let index = inven.indexOf(workArr[1]);
            if (test == true) {
                inven.splice(index, 1);
                inven.push(workArr[1]);
            }
        }


    }
    console.log(inven.join(", "));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])
