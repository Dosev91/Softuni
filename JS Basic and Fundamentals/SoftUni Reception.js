function reception(input) {

    let employeePerHour = +input[0] + +input[1] + +input[2];
    let needTime = input[3] / employeePerHour;

    console.log(`Time needed: ${Math.ceil(needTime)}h.`);

}
// reception(['5', '6', '4', '20']);
reception(['1', '2', '3', '45']);
// reception(['3', '2', '5', '40']);