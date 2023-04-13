function messages(input) {

    let messagesUser = {};
    let index = 1;
    let limited = +input[0];

    while (input[index] !== "Statistics") {
        let workArr = input[index].split("=");
        if (workArr[0] == "Add") {
            let test = messagesUser.hasOwnProperty(workArr[1]);
            if (!test) {
                messagesUser[workArr[1]] = [+workArr[2], +workArr[3]];
            }
        } else if (workArr[0] === "Message") {
            let test = messagesUser.hasOwnProperty(workArr[1]) && messagesUser.hasOwnProperty(workArr[2]);
            if (test) {
                messagesUser[workArr[1]][0]++;
                messagesUser[workArr[2]][1]++;
            }
            if (+messagesUser[workArr[1]][0] + +messagesUser[workArr[1]][1] >= limited) {
                delete messagesUser[workArr[1]];
                console.log(`${workArr[1]} reached the capacity!`);
            } else if (+messagesUser[workArr[2]][0] + +messagesUser[workArr[2]][1] >= limited) {
                delete messagesUser[workArr[2]];
                console.log(`${workArr[2]} reached the capacity!`);
            }
        } else if (workArr[0] === "Empty") {
            let test = messagesUser.hasOwnProperty(workArr[1]);
            if (workArr[1] === "All") {
                for (const key of Object.keys(messagesUser)) {
                    delete messagesUser[key];
                }
            } else if (test) {
                delete messagesUser[workArr[1]];
            }
        }
        index++;
    }
    let count = 0;
    for (const key of Object.keys(messagesUser)) {
        count++;
    }
    console.log(`Users count: ${count}`);
    for (const key of Object.keys(messagesUser)) {
        let sum = +messagesUser[key][0] + +messagesUser[key][1];
        console.log(`${key} - ${sum}`);
    }

}
messages(["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"])
messages(["12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"])
messages(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"])

