function friendList(input) {

    let friends = input[0].split(", ");
    let blackList = [];
    let lostName = [];


    for (let i = 1; i < input.length; i++) {
        let workArr = input[i].split(" ");
        switch (workArr[0]) {
            case "Blacklist":
                let nameOfFriend = friends.includes(workArr[1]);
                if (nameOfFriend == true) {
                    nameOfFriend = friends.indexOf(workArr[1]);
                    console.log(`${workArr[1]} was blacklisted.`);
                    blackList.push(workArr[1]);
                    friends.splice(nameOfFriend, 1,"Blacklisted");
                    break;
                } else {
                    console.log(`${workArr[1]} was not found.`);
                }
                break;
            case "Error":
                let indexValid = friends.includes(friends[Number(workArr[1])]);
                let nameOfBlackList = friends[Number(workArr[1])];
                let blackListSearch = blackList.includes(nameOfBlackList);
                let lostSearch = lostName.includes(nameOfBlackList);
                if (indexValid == true && blackListSearch == false && lostSearch == false && nameOfBlackList !== "Lost"&&nameOfBlackList !== "Blacklisted") {
                    friends.splice(Number(workArr[1]), 1, "Lost");
                    console.log(`${nameOfBlackList} was lost due to an error.`);
                    lostName.push(nameOfBlackList);
                }
                break;
            case "Change":
                let nameOfFriends = friends.includes(friends[workArr[1]]);
                if (nameOfFriends == true) {
                    console.log(`${friends[workArr[1]]} changed his username to ${workArr[2]}.`);
                    friends.splice(workArr[1], 1, workArr[2]);

                }
                break;


        }
    }

    console.log(`Blacklisted names: ${blackList.length}`);
    console.log(`Lost names: ${lostName.length}`);
    console.log(friends.join(" "));



}
friendList(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"])








