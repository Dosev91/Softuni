function sortTickets(arrOfTickets, sortType) {

    class Ticket {
        destination;
        price;
        status;

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }
    const tickets = arrOfTickets.map(ti => {
        const [dest, price, status] = ti.split('|');
        return new Ticket(dest, price, status);
    })

    return tickets.sort((a, b) => {
        switch (sortType) {
            case 'destination':
                return a.destination.localeCompare(b.destination);
            case "status":
                return a.status.localeCompare(b.status);
            case "price":
                return a.price - b.price;

        }
    })
}

