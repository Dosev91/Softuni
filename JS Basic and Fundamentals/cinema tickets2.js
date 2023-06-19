function slove(input) {
    let filmName = input[0];
    let freePlace = Number(input[1])
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;
    let totalTickets = 0;
    let ticketsForMoovie = 0;

    for (let i = 2; i < input.length; i++) {
        switch (input[i]) {
            case "standard":
                standardTickets++;
                totalTickets++;
                ticketsForMoovie++;
                break;
            case "student":
                studentTickets++;
                totalTickets++;
                ticketsForMoovie++;
                break;
            case "kid":
                kidTickets++;
                totalTickets++;
                ticketsForMoovie++;
                break;
            case "End":
                console.log(`${filmName} - ${((ticketsForMoovie / freePlace) * 100).toFixed(2)}% full.`);
                filmName = input[i + 1];
                freePlace = Number(input[i + 2]);
                ticketsForMoovie = 0;
                break;
            case "Finish":
                console.log(`${filmName} - ${((ticketsForMoovie / freePlace) * 100).toFixed(2)}% full.`);
                console.log(`Total tickets: ${totalTickets}`);
                console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
                console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
                console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
                break;
        }

    }

}
slove(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
