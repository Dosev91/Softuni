function radar(speed, area) {

    switch (area) {
        case 'motorway':
            console.log(speedChek(speed, 130));
            break;
        case 'interstate':
            console.log(speedChek(speed, 90));
            break;
        case 'city':
            console.log(speedChek(speed, 50));
            break;
        case 'residential':
            console.log(speedChek(speed, 20));
            break;
    }
}

function speedChek(speeds, limit) {

    let difference = speeds - limit;

    if (speeds <= limit) {
        return `Driving ${speeds} km/h in a ${limit} zone`;
    } else if (difference <= 20) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`;
    } else if (difference > 20 && difference <= 40) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`;
    } else if (difference > 40) {
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`;
    }
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');