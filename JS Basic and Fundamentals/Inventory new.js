function inventory(input) {

    let finaleArr = [];

    for (const line of input) {
        let [name, level, items] = line.split(" / ");
        let heroes = {
            name: name,
            level: level,
            items: items.split(", ")
        }
        finaleArr.push(heroes);
    }
    finaleArr.sort((heroesA, heroesB) => heroesA.level - heroesB.level);
    for (const key of finaleArr) {
        console.log(`Hero: ${key.name}`);
        console.log(`level => ${key.level}`);
        console.log(`items => ${key.items.join(", ")}`);
    }
    // console.table(finaleArr)
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'

]

)

    // for (let i = 0; i < input.length; i++) {
    //     let obj = regOfHero(input[i]);
    //     finaleArr.push(obj);

    // }
    // for (const key of Object.keys(finaleArr)) {

    // }
    // console.log(finaleArr[0].Name);
