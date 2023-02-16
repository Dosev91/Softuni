function pirates(arr) {

    let piratesShip = arr[0].split(">").map(i=>Number(i));
    let warShip = arr[1].split(">").map(i=>Number(i));
    let maxHealth = Number(arr[2]);
    let sum = 0;
    let sum2 = 0;
    let life = true;

    for (let i = 3; i < arr.length; i++) {
        sum = 0;
        sum2 = 0;
        let workArr = arr[i].split(" ");
        switch (workArr[0]) {
            case "Fire":
                if (Number(workArr[1]) >= 0 && Number(workArr[1]) < warShip.length) {
                    warShip[workArr[1]] -= Number(workArr[2]);
                }
                break;

            case "Defend":
                if (workArr[1] >= 0 && workArr[1] < piratesShip.length && workArr[2] >= 0 && workArr[2] < piratesShip.length) {
                    for (let k = workArr[1]; k <= workArr[2]; k++) {
                        piratesShip[k] -= workArr[3];
                    }
                }
                break;

            case "Repair":
                if (workArr[1] >= 0 && workArr[1] < piratesShip.length) {
                    if (Number(workArr[2]) + Number(piratesShip[workArr[1]]) > maxHealth) {
                        piratesShip[workArr[1]] = maxHealth;
                        break;
                    } else {
                        piratesShip[workArr[1]] += Number(workArr[2]);
                    }
                }
                break;

            case "Status":
                let count = 0;
                for (let j = 0; j < piratesShip.length; j++) {
                    if (Number(piratesShip[j]) < maxHealth * 0.2) {
                        count++;
                    }
                }
                if (count > 0) {
                    console.log(`${count} sections need repair.`);
                }
                break;

            case "Retire":
                break;

        }
        
        sum = piratesShip.reduce((partialSum, a) => partialSum + a, 0);
        sum2 = warShip.reduce((partialSum, a) => partialSum + a, 0);
       
        if (sum <= 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            life = false;
            break;
        } else if (sum2 <= 0) {
            console.log(`You won! The enemy ship has sunken.`);
            life = false;
            break;
        }

    }
    if (life == true) {
        console.log(`Pirate ship status: ${sum}`);
        console.log(`Warship status: ${sum2}`);
    }

}
pirates(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])





