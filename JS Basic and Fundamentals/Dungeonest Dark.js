function dungeonestDark(input) {

    let arr = input[0].split("|");
    let life = 100;
    let rooms = 0;
    let coins = 0;
    let deathOrLife = true;
    let monsters = "";

    for (let j = 0; j < arr.length; j++) {
        let arr1 = arr[j].split(" ");
        for (let i = 0; i < arr1.length; i++) {
            if (life - Number(arr1[i + 1]) <= 0 && arr1[i] !== "chest") {
                rooms++;
                console.log(`You died! Killed by ${arr1[i]}`);
                console.log(`Best room: ${rooms}`);
                deathOrLife = false;
                break;
            }
            if (arr1[i] == "potion") {
                life += Number(arr1[i + 1]);
                rooms++;
                if (life > 100) {
                    life = 100;
                }
                console.log(`You healed for ${arr1[i + 1]} hp.`);
                console.log(`Current helth: ${life} hp.`);
                break;
            } else if (arr1[i] == "chest") {
                coins += Number(arr1[i + 1]);
                rooms++;
                console.log(`You found ${arr1[i + 1]} coins.`);
                break;
            } else if (arr1[i] !== "chest" && arr1[i] !== "potion" && arr1[i - 1] !== monsters) {
                life -= Number(arr1[i + 1]);
                monsters = arr1[i];
                rooms++;
                console.log(`You slayed ${arr1[i]}.`);
            }
        }
        if (deathOrLife == false) {
            break;
        }
        monsters = '';
    }
    if (deathOrLife == true) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${life}`);
    }


}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])


