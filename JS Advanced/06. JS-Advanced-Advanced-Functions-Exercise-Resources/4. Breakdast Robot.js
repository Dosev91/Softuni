function solution() {
    const mictoElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recepts = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            carbohydrate: 10,
            flavour: 10,
            fat: 10,
            protein: 10
        }
    }

    return function (commandString) {
        const [command, secondArg, quantity] = commandString.split(" ");

        const obj = {
            restock: () => {
                mictoElements[secondArg] += +quantity;
                return `Success`;
            },
            prepare: () => {
                let test = true;
                for (const [ingredient, value] of Object.entries(recepts[secondArg])) {
                    if (value * +quantity > mictoElements[ingredient]) {
                        test = false;
                        return `Error: not enough ${ingredient} in stock`;
                    }
                }
                if (test) {
                    for (const [ingredient, value] of Object.entries(recepts[secondArg])) {
                        mictoElements[ingredient] -= value * +quantity;
                    }
                    return `Success`;
                }
            },
            report: () => {
                return `protein=${mictoElements.protein} carbohydrate=${mictoElements.carbohydrate} fat=${mictoElements.fat} flavour=${mictoElements.flavour}`
            },
        }

        return obj[command]();

    }

}

let manager = solution();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));