function employees(input) {

    let names = {};

    for (const key of input) {
        let test = names.hasOwnProperty(key);
        if (!test) {
            names[key] = key.length;
        }
    }
    for (const [name, value] of Object.entries(names)) {
        console.log(`Name: ${name} -- Personal Number: ${value}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])