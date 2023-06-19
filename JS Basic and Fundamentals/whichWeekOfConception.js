function whichWeek(now, dayOfConception) {

    const daysNum = day(now, dayOfConception);
    const weeks = daysNum / 7;

    console.log(Math.floor(weeks));

}

function day(firstDate, secondDate) {

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = 0;

    if (firstDate[2] !== secondDate[2]) {
        for (let i = 1; i <= secondDate[1]; i++) {
            if (i == secondDate[1]) {
                days += secondDate[0];
            } else {
                days += month[i - 1];
            }
        }
        for (let j = firstDate[1]; j <= 12; j++) {
            if (firstDate[1] == j) {
                days += month[j - 1] - firstDate[0];
            } else {
                days += month[j - 1];
            }
        }
    } else {
        for (let i = firstDate[1]; i <= secondDate[1]; i++) {
            if (i == firstDate[1]) {
                days += month[i - 1] - firstDate[0];
            } else if (i !== secondDate[1] && i !== firstDate[1]) {
                days += month[i - 1];
            } else {
                days += secondDate[0];
            }
        }
    }
    return days;
}


whichWeek([04, 10, 2022], [04, 01, 2023])
