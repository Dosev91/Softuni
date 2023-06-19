function shoping(arr) {

    let initialList = arr[0].split("!");


    for (let i = 1; i < arr.length; i++) {
        let workArr = arr[i].split(" ");

        if (workArr[0] == "Urgent") {
            let test = initialList.includes(workArr[1]);
            if (test == false) {
                initialList.unshift(workArr[1]);
            }
        } else if (workArr[0] == "Unnecessary") {
            let test = initialList.includes(workArr[1]);
            if (test == true) {
                initialList.splice(initialList.indexOf(workArr[1]), 1);
            }
        } else if (workArr[0] == "Correct") {
            let test = initialList.includes(workArr[1]);
            if (test == true) {
                initialList.splice(initialList.indexOf(workArr[1]), 1, workArr[2]);
            }
        } else if (workArr[0] == "Rearrange") {
            let test = initialList.includes(workArr[1]);
            if (test == true) {
                initialList.splice(initialList.indexOf(workArr[1]), 1);
                initialList.push(workArr[1]);
            }
        }

    }
    console.log(initialList.join(", "));
}
shoping(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

