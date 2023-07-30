class footballTeam {
    constructor(clubName, country, invitedPlayers) {

        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];

    }
    newAdditions(footballPlayers) {
        const plaeyrNamelist = new Set();

        for (const playerString of footballPlayers) {
            const [name, age, price] = playerString.split("/");
            const existingPlayer = this.invitedPlayers.find(x => x.name === name);

            if (existingPlayer) {
                if (existingPlayer.price > +price) {
                    existingPlayer.price = +price;
                }
            } else {
                this.invitedPlayers.push({
                    name,
                    age: +age,
                    playerValue: +price
                })
            }
            plaeyrNamelist.add(name);
        }

        return `You successfully invite ${Array.from(plaeyrNamelist).join(", ")}.`
    }

    signContract(selectedPlayer) {

        const [name, offerPlayer] = selectedPlayer.split("/");
        const existingPlayer = this.invitedPlayers.find(x => x.name === name);

        if (!existingPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else if (+offerPlayer < existingPlayer.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${existingPlayer.playerValue - +offerPlayer} million more are needed to sign the contract!`);
        } else {
            existingPlayer.playerValue = "Bought";
            return `Congratulations! You sign a contract with ${name} for ${offerPlayer} million dollars.`;
        }
    }

    ageLimit(name, age) {
        const existingPlayer = this.invitedPlayers.find(x => x.name === name);

        if (!existingPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else if (existingPlayer.age < +age) {
            const ageDifference = +age - existingPlayer.age;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult() {

        let result = "Players list:\n";
        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(({ name, playerValue }) => {
                result += `Player ${name}-${playerValue}\n`
            });
        return result;
    }
}

let fTeam = new footballTeam("Real Madrid", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

