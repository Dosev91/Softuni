function gladiators(input) {

    let index = 0
    let gladiator = new Map();
    let command = input[index];
    index++;

    while (command !== 'Ave Cesar') {

        let workArr = command.split(' -> ');
        if (workArr.length == 3) {
            let [name, technique, skill] = workArr;
            if (!gladiator.has(name)) {
                gladiator.set(name, new Map());
            }
            if (!gladiator.get(name).has(technique) ||
                gladiator.get(name).has(technique) &&
                gladiator.get(name).get(technique) < skill) {
                gladiator.get(name).set(technique, +skill);
            }
        } else {
            let [gladOne, gladTwo] = command.split(' vs ');
            if (gladiator.has(gladOne) && gladiator.has(gladTwo)) {
                let techGldiatorA = gladiator.get(gladOne);
                let techGladiatorB = gladiator.get(gladTwo);
                let bigSkillMap = techGldiatorA.size > techGladiatorB.size ? techGldiatorA : techGladiatorB;
                let smallSkillMap = techGldiatorA.size > techGladiatorB.size ? techGladiatorB : techGldiatorA;
                for (const [techName, skill] of Array.from(bigSkillMap)) {
                    if (smallSkillMap.has(techName)) {
                        if (techGldiatorA.get(techName) > techGladiatorB.get(techName)) {
                            techGladiatorB.delete(techName);
                        } else {
                            techGldiatorA.delete(techName);

                        }
                    }
                }
            }
        }
        command = input[index];
        index++;
    }
    let newMap = new Map();
    for (const [gladiatoeName, techniques] of Array.from(gladiator)) {
        let sum = 0;
        for (const [tech, skill] of Array.from(techniques)) {
            sum += skill;
        }
        if (sum !== 0) {
            newMap.set(gladiatoeName, sum);
        }
    }
    let sortGladiatorPoints = Array.from(newMap).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    })
    // console.table(sortGladiatorPoints);
    for (const [hero, point] of sortGladiatorPoints) {
        console.log(`${hero}: ${point} skill`);
        let tech = Array.from(gladiator.get(hero)).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0])
        })

        for (const [skill, value] of tech) {
            console.log(`- ${skill} <!> ${value}`);
        }
    }
} gladiators([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
) 