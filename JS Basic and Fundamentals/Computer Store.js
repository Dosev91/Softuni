function computerStore(input) {


    let totalPrice = 0;
    let taxes = 0;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        if (i == input.length - 1) {
            break;
        }
        if (input[i] <= 0) {
            console.log(`Invalid price!`);
        } else {
            let tax = Number(input[i]) * 0.2;
            sum += Number(input[i]);
            taxes += tax;
        }
    }

    totalPrice = sum + taxes;
    if (input[input.length - 1] == "special") {
        totalPrice = totalPrice - (totalPrice * 0.1);
    } 
     if (totalPrice <= 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }

}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    
    


 // console.log(`Congratulations you've just bought a new computer!
    // Price without taxes: ${sum.toFixed(2)}$
    // Taxes: ${taxes.toFixed(2)}$
    // -----------
    // Total price: ${totalPrice.toFixed(2)}$"
    //     `);