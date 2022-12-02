function slove(input) {
    const nameOfTheCompany = input[0];
    const ticketForAdults = Number(input[1]);
    const kidTicket = Number(input[2]);
    const priceService = Number(input[4]);
    const priceTickets = Number(input[3]);

    let priceKidTickets = priceTickets - (priceTickets * 0.7) + priceService;
    let totalProfit = (ticketForAdults * ( priceTickets + priceService)) + (kidTicket * priceKidTickets);
    let profit = totalProfit * 0.2;

    console.log(`The profit of your agency from ${nameOfTheCompany} tickets is ${profit.toFixed(2)} lv.`);

}
slove(["Ryanair", "60", "23", "158.96", "39.12"])
