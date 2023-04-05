function stringGame(input) {

    let myString = input[0];
    let index = 1;

    while (input[index] !== "Done") {
        let workArr = input[index].split(" ");
        if (workArr[0] === "Change") {
            // myString = myString.replaceAll(workArr[1], workArr[2]);
            let a = myString.split("");
            for (let i = 0; i < a.length; i++) {
                if (a[i] == workArr[1]) {
                    a[i] = workArr[2];
                }
            }
            myString = a.join("");
            console.log(myString);
        } else if (workArr[0] === "Includes") {
            let test = myString.includes(workArr[1]);
            if (test) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (workArr[0] === "End") {
            let test = myString.endsWith(workArr[1]);
            if (test) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (workArr[0] === "Uppercase") {
            myString = myString.toUpperCase();
            console.log(myString);
        } else if (workArr[0] === "FindIndex") {
            let test = myString.indexOf(workArr[1]);
            console.log(test);
        } else if (workArr[0] === "Cut") {
            let sum = +workArr[1] + +workArr[2];
            let test = myString.substring(+workArr[1], sum);
            console.log(test);
        }
        index++;
    }

}
stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])
stringGame(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"])

