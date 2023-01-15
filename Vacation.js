function vacation(numOfPeople, type, dayOfWeek) {

    let sum = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (type == 'Students') {
                if (numOfPeople >= 30) {
                    sum = numOfPeople * 8.45;
                    sum = sum - (sum * 0.15);
                    break;
                } else {
                    sum = numOfPeople * 8.45;
                    break;
                }

            } else if (type == 'Business') {
                if (numOfPeople >= 100) {
                    sum = (numOfPeople - 10) * 10.90;
                    break;
                } else {
                    sum = numOfPeople * 10.90;
                    break;
                }
            } else {
                if (numOfPeople >= 10 && numOfPeople <= 20) {
                    sum = numOfPeople * 15;
                    sum = sum - (sum * 0.05);
                    break;
                } else {
                    sum = numOfPeople * 15;
                    break;
                }
            }

        case 'Saturday':
            if (type == 'Students') {
                if (numOfPeople > 30) {
                    sum = numOfPeople * 9.80;
                    sum = sum - (sum * 0.15);
                    break;
                } else {
                    sum = numOfPeople * 9.80;
                    break;
                }

            } else if (type == 'Business') {
                if (numOfPeople > 100) {
                    sum = (numOfPeople - 10) * 15.60;
                    break;
                } else {
                    sum = numOfPeople * 15.60;
                    break;
                }
            } else {
                if (numOfPeople >= 10 && numOfPeople <= 20) {
                    sum = numOfPeople * 20;
                    sum = sum - (sum * 0.05);
                    break;
                } else {
                    sum = numOfPeople * 20;
                    break;
                }
            }
        case 'Sunday':
            if (type == 'Students') {
                if (numOfPeople >= 30) {
                    sum = numOfPeople * 10.46;
                    sum = sum - (sum * 0.15);
                    break;
                } else {
                    sum = numOfPeople * 10.46;
                    break;
                }
            } else if (type == 'Business') {
                if (numOfPeople > 100) {
                    sum = (numOfPeople - 10) * 16;
                    break;
                } else {
                    sum = numOfPeople * 16;
                    break;
                }
            } else {
                if (numOfPeople >= 10 && numOfPeople <= 20) {
                    sum = numOfPeople * 22.50;
                    sum = sum - (sum * 0.05);
                    break;
                } else {
                    sum = numOfPeople * 22.50;
                    break;
                }
            }
    }

    console.log(`Total price: ${sum.toFixed(2)}`);

}
vacation(30,"Students","Sunday")