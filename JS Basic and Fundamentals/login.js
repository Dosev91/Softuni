function login(input) {

    let userName = input[0];
    let pass = password(userName);
    let step = 0;

    for (let i = 1; i < input.length; i++) {
        step++;
        if (input[i] == pass) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            if (step == 4) {
                console.log(`User ${userName} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }

    }


}
function password(x) {

    let currentPass = '';

    for (let i = x.length - 1; i >= 0; i--) {
        currentPass += x[i];
    }
    return currentPass;
}


login(['Acer','login','go','let me in','recA'])