function employees(arr) {

    let personalNum = 0;

    for (const name of arr) {
        console.log(`Name: ${name} -- Personal Number: ${name.length }`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)