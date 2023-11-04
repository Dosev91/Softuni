class FlightBookingSystem {

    constructor(agencyName, flights = [], bookings = [], bookingsCount = 0) {
        this.agencyName = agencyName;
        this.flights = flights;
        this.bookings = bookings;
        this.bookingsCount = bookingsCount;
    }

    addFlight(flightNumber, destination, departureTime, price) {

        const flithtAlreadyExists = this.flights.some(f => {
            return f.flightNumber === flightNumber
        });

        if (flithtAlreadyExists) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        } else {
            this.flights.push({
                flightNumber,
                destination,
                departureTime,
                price,
            });

            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }

    }

    bookFlight(passengerName, flightNumber) {
        const flithtExists = this.flights.some(f => {
            return f.flightNumber === flightNumber
        });

        if (!flithtExists) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookingsCount++;

            this.bookings.push({
                passengerName,
                flightNumber
            });

            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }

    }

    cancelBooking(passengerName, flightNumber) {
        const bookingIndex = this.bookings.findIndex(b => {
            return b.flightNumber === flightNumber && b.passengerName === passengerName;
        });

        if (bookingIndex === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {

            this.bookings.splice(bookingIndex, 1);

            this.bookingsCount--;

            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        }

    }

    showBookings(criteria) {

        if (this.bookings.length === 0) {

            throw new Error(`No bookings have been made yet.`);
        }

        if (criteria === "all") {

            let output = `All bookings(${this.bookingsCount}):\n`;

            output += this.bookings.map(f => `${f.passengerName} booked for flight ${f.flightNumber}.`).join('\n')

            return output;

        } else if (criteria === "cheap") {

            const cheapFligts = this.bookings.filter(b => {
                const { price } = this.flights.find(f => f.flightNumber === b.flightNumber);

                return price <= 100;

            })

            if (cheapFligts.length === 0) {
                return "No cheap bookings found."
            } else {

                let output = "Cheap bookings:\n";
                output += cheapFligts.map(f => `${f.passengerName} booked for flight ${f.flightNumber}.`).join('\n')


                return output;

            }

        } else if (criteria === "expensive") {
            const expensiveFlights = this.bookings.filter(b => {
                const { price } = this.flights.find(f => f.flightNumber === b.flightNumber);

                return price > 100;

            })

            if (expensiveFlights.length === 0) {
                return "No expensive bookings found."
            } else {

                let output = "Expensive bookings:\n";
                output += expensiveFlights.map(f => `${f.passengerName} booked for flight ${f.flightNumber}.`).join('\n')

                return output
            }
        }

    }

}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("all"));






