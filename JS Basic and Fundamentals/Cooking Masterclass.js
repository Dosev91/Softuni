function cooking(input) {

    let flour = 0;
    let eggs = 0;
    let apron = 0;
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggsPrice = Number(input[3]);
    let apronPrice = Number(input[4]);
    let flourNumber = 0;

    for (let i = 0; i < students; i++) {
        flourNumber++;
        apron++;
        eggs += 10;
        if (flourNumber == 5) {
            flourNumber = 0;
        } else {
            flour++;
        }

    }
    apron = Math.ceil(apron + (apron * 0.2));
    let totalPrice = (flour * flourPrice) + (eggs * eggsPrice) + (apronPrice * apron)

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`);
    }



}
cooking(['50',
'2',
'1.0',
'0.10',
'10.0'])



