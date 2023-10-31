const obj = {
    prop1: 'Boyan',
    prop2: '_Stanchev',
    prop3: {
        prop4: 'Hristiqn',
        prop5: "Lova",
        prop6: "_Denislav",
        prop7: {
            prop8: "Krasi",
            prop9: "_Nikola",
            prop10: "Vancheto",
            prop14: {
                prop15: "Kirqka",
                prop16: "_Emil",
                prop17: "_Ivan",
            },
            prop17: "Mancho"
        },
        prop18: "_Dafo"
    },
    prop11: "Ioncheto",
    prop12: "_Mitko",
    prop13: "Dosev"
}

function removeUnderscores(obj) {

    for (let [key, value] of Object.entries(obj)) {
        const typeOfValue = typeof value;
        if (typeOfValue === "object") {
            removeUnderscores(value);
        } else {
            if (value[0] === "_") {
                delete obj[key]
            }
        }
    }

}

function logEl(obj) {

    for (let [key, value] of Object.entries(obj)) {
        const typeOfValue = typeof value;
        if (typeOfValue === "object") {
            logEl(value);
        } else {
            console.log(obj[key]);
        }
    }

}

removeUnderscores(obj)
logEl(obj)



