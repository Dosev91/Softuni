function slove(input) {
    let numberFloor = Number(input[0]);
    let numRooms = Number(input[1]);
    let result = 0;
    let sum = "";

    for (let i = numberFloor; i > 0; i--) {
        for (let j = 0; j < numRooms; j++) {
            if (i == numberFloor) {
                result = "L"
            } else if (i % 2 == 0) {
                result = "A"
            } else {
                result = "O"
            }
            sum += result + i + j + " "
        }
        console.log(sum);
        sum = ""

    }

}
slove(["9", "5"])
