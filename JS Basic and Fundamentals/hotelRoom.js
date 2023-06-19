function slove(input) {
    let month = (input[0]);
    let numberNights = Number(input[1]);
    let apartment = 0;
    let studio = 0;
    let sumApartament = 0
    let sumStudio = 0;

    switch (month) {
        case "Octomber":
        case "May": apartment = numberNights * 65; studio = numberNights * 50;
            if (numberNights > 7 && numberNights <= 14) {
                sumStudio = studio - ((5 / 100) * studio);
                console.log(`Apartament: ${apartment} leva.`);
                console.log(`Studio: ${sumStudio} lv.`);
            } else if (numberNights > 14) {
                sumStudio = studio - ((30 / 100) * studio);
                sumApartament = apartment - ((10 / 100) * apartment);
                console.log(`Apartament: ${sumApartament.toFixed(2)} leva.`);
                console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
            }
            break;
        case "June":
        case "September": apartment = numberNights * 68.70; studio = numberNights * 75.20;
            if (numberNights > 14) {
                sumStudio = studio - ((20 / 100) * studio);
                sumApartament = apartment - ((10 / 100) * apartment);
                console.log(`Apartment: ${sumApartament.toFixed(2)} leva.`);
                console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
            } else {
                console.log(`Apartment: ${apartment.toFixed(2)} leva.`);
                console.log(`Studio: ${studio.toFixed(2)} lv.`);
            }
            break;

    }
}
slove(["May",
"15"])





