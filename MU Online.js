function muOnline(input) {

    let rooms = input.split("|");
    let life = 100;
    let money = 0;
    let stage = 0;
    let deadOrLife = true;

    for (let i = 0; i < rooms.length; i++) {
        stage++;
        let workArr = rooms[i].split(" ");
        if (workArr[0] == "potion") {
            if (Number(workArr[1]) + life > 100) {
                console.log(`You healed for ${100 - life} hp.`);
                life = 100;
                console.log(`Current health: ${life} hp.`);
            } else {
                life += Number(workArr[1]);
                console.log(`You healed for ${Number(workArr[1])} hp.`);
                console.log(`Current health: ${life} hp.`);
            }
        } else if ((workArr[0]) == "chest") {
            money += Number(workArr[1]);
            console.log(`You found ${Number(workArr[1])} bitcoins.`);
        }
        else if (workArr[0] !== "chest" && workArr[0] !== "potion") {
            life -= Number(workArr[1]);
            if (life > 0) {
                console.log(`You slayed ${workArr[0]}.`);
            } else {
                console.log(`You died! Killed by ${workArr[0]}.`);
                console.log(`Best room: ${stage}`);
                deadOrLife = false;
                break;
            }
        }

    }
    if (deadOrLife == true) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${money}`);
        console.log(`Health: ${life}`);
    }

}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")