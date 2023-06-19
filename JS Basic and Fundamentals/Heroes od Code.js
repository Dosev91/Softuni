function heroesOfCode(input) {

    let heroes = {};
    let numberPlayers = +input[0];
    let index = 1;

    while (numberPlayers + 1 > index) {
        let workArr = input[index].split(" ");
        heroes[workArr[0]] = [+workArr[1], +workArr[2]];
        index++
    }
    while (input[index] !== "End") {
        let workArr = input[index].split(" - ");
        if (workArr[0] == "CastSpell") {
            if (heroes[workArr[1]][1] - +workArr[2] > 0) {
                heroes[workArr[1]][1] -= +workArr[2];
                console.log(`${workArr[1]} has successfully cast ${workArr[3]} and now has ${heroes[workArr[1]][1]} MP!`)
            } else {
                console.log(`${workArr[1]} does not have enough MP to cast ${workArr[3]}!`);
            }
        } else if (workArr[0] == "TakeDamage") {
            if (heroes[workArr[1]][0] - +workArr[2] > 0) {
                heroes[workArr[1]][0] -= +workArr[2];
                console.log(`${workArr[1]} was hit for ${workArr[2]} HP by ${workArr[3]} and now has ${heroes[workArr[1]][0]} HP left!`);
            } else {
                console.log(`${workArr[1]} has been killed by ${workArr[3]}!`);
                delete heroes[workArr[1]];
            }
        } else if (workArr[0] == "Recharge") {
            if (+workArr[2] + heroes[workArr[1]][1] > 200) {
                let sum = 200 - heroes[workArr[1]][1];
                heroes[workArr[1]][1] += sum;
                console.log(`${workArr[1]} recharged for ${sum} MP!`);
            } else {
                heroes[workArr[1]][1] += +workArr[2];
                console.log(`${workArr[1]} recharged for ${workArr[2]} MP!`);
            }
        } else if (workArr[0] == "Heal") {
            if (+workArr[2] + heroes[workArr[1]][0] > 100) {
                let sum = 100 - heroes[workArr[1]][0];
                heroes[workArr[1]][0] += sum;
                console.log(`${workArr[1]} healed for ${sum} HP!`);
            } else {
                heroes[workArr[1]][0] += +workArr[2];
                console.log(`${workArr[1]} healed for ${+ workArr[2]} HP!`);
            }
        }
        index++
    }
    for (const key of Object.keys(heroes)) {
        console.log(`${key}\n HP: ${heroes[key][0]}\n MP: ${heroes[key][1]} `);

    }
}
heroesOfCode(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
])
// heroesOfCode(["2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"])