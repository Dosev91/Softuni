function bossRush(input) {

    let a = +input[0];

    let regex = /[\|](?<name>[A-Z]{4,})[\|][\:][\#](?<tatle>[A-Za-z]+[\ ][A-Za-z]+)[\#]/

    for (const key of input) {
        if (key == input[0]) {
        } else {
            if (regex.test(key)) {
                let arrRegex = regex.exec(key);

                console.log(`${arrRegex.groups.name}, The ${arrRegex.groups.tatle}\n>> Strength: ${arrRegex.groups.name.length}\n>> Armor: ${arrRegex.groups.tatle.length}`);
            } else {
                console.log(`Access denied!`);
            }
        }
    }

}
bossRush(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])

// bossRush(['3',
//     '|STEFAN|:#H1gh Overseer#',
//     '|IVAN|:#Master detective#',
//     '|KARL|: #Marketing lead#'])
