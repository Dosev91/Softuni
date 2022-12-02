function slove(input) {
    let userName = input[0];
    let password = Number(input[1]);
    let data = input[2]
    let index = 3;

    while (input[index] !== data) {
        data = input[index];
        index++;
    }   console.log(`Welcome ${userName}!`);

}
slove(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])