function flight(input) {

    let flights = input[0];
    let command = input[1];
    let finaleComand = input[2];

    let flyList = {};

    for (const fly of flights) {
        let workArr = fly.split(" ");
        flyList[workArr[0]] = {
            Destination: workArr[1],
            Status: "Ready to fly"
        }
    }
    for (const commands of command) {
        let workArr = commands.split(" ");
        if (flyList.hasOwnProperty(workArr[0])) {
            flyList[workArr[0]].Status = "Cancelled"
        }
    }
    if (finaleComand == "Cancelled") {
        for (const [key, value] of Object.entries(flyList)) {
            let test = value.Status === "Cancelled";
            if (test) {
                console.log(flyList[key]);
            }
        }
    } else {
        for (const [key, value] of Object.entries(flyList)) {
            let test = value.Status === "Cancelled";
            if (!test) {
                console.log(flyList[key]);
            }
        }
    }
    console.table(flyList)
}
// flight([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'],
// ['Cancelled']
// ])
flight([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
])