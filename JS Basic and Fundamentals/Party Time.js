function paryTime(input) {

    let partyList = new Set();
    let nameVisitist = new Set();
    let party = false;

    for (const name of input) {
        if (name === 'PARTY') {
            party = true;
        }
        if (party == false) {
            partyList.add(name);
        } else {
            nameVisitist.add(name);
        }
    }
    nameVisitist.delete('PARTY');
    for (const key of nameVisitist) {
        partyList.delete(key);
    }
    let list = Array.from(partyList).sort((a, b) => a.localeCompare(b));

    let numberPeople = partyList.size;
    console.log(numberPeople);

    for (const name of list) {
        console.log(name);
    }
}
paryTime(['m8rfQBvl',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]



)