const expect = require('chai').expect;

const lottery = {
    buyLotteryTicket(ticketPrice, ticketCount, buy) {
        if (buy === false) {
            throw new Error("Unable to buy lottery ticket!");
        } else {
            if (
                ticketPrice <= 0 ||
                ticketCount < 1 ||
                typeof ticketPrice !== "number" ||
                typeof ticketCount !== "number" ||
                typeof buy !== "boolean"
            ) {
                throw new Error("Invalid input!");
            } else {
                let totalPrice = ticketPrice * ticketCount;
                return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
            }
        }
    },
    checkTicket(ticketNumbers, luckyNumbers) {
        if (
            !Array.isArray(ticketNumbers) ||
            !Array.isArray(luckyNumbers) ||
            ticketNumbers.length !== 6 ||
            luckyNumbers.length !== 6
        ) {
            throw new Error("Invalid input!");
        }

        const uniqueTicketNumbers = ticketNumbers.filter(
            (number, index, array) => array.indexOf(number) === index
        );

        let winningNumbers = 0;

        for (const number of uniqueTicketNumbers) {
            if (luckyNumbers.includes(number)) {
                winningNumbers++;
            }
        }

        if (winningNumbers >= 3 && winningNumbers < 6) {
            return "Congratulations you win, check your reward!";
        } else if (winningNumbers === 6) {
            return "You win the JACKPOT!!!";
        }
    }
    ,
    secondChance(ticketID, secondChanceWinningIDs) {
        if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
            throw new Error("Invalid input!");
        }
        if (secondChanceWinningIDs.includes(ticketID)) {
            return "You win our second chance prize!";
        } else {
            return "Sorry, your ticket didn't win!";
        }
    },
};

describe("Tests …", function () {
    describe("Test buyLotteryTicket", function () {
        it("Should throw error if buy is false", function () {
            expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw('Unable to buy lottery ticket!');
        });
        it("Should throw error if invalid input", function () {
            expect(() => lottery.buyLotteryTicket(-1, 1, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, -1, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket("-1", 1, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, "1", true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, 1, "string")).to.throw('Invalid input!');
        });
        it("Should work with valid input", function () {
            expect(lottery.buyLotteryTicket(10, 5, true)).to.be.equal(`You bought 5 tickets for 50$.`)
        })
    });
    describe("Test chechTicket", function () {
        it("Should trow error on in valid input", function () {
            expect(() => lottery.checkTicket(12, [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
        })
        it("Should trow error on in valid input", function () {
            expect(() => lottery.checkTicket([], 12)).to.throw("Invalid input!");
        })
        it("Should trow error on in valid input", function () {
            expect(() => lottery.checkTicket([1, 2], [])).to.throw("Invalid input!");
        })
        it("Should trow error on in valid input", function () {
            expect(() => lottery.checkTicket([], [22, 12])).to.throw("Invalid input!");
        })

        it("Should win if winning numbres are between 3 or 6 ", function () {
            expect(lottery.checkTicket([1, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6])).to.be.equal("Congratulations you win, check your reward!");
        })
        it("Should win if you win the jackpot", function () {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.be.equal("You win the JACKPOT!!!");
        })
        it("Should return undefined ", function () {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [11, 12, 13, 14, 15, 16])).to.be.undefined;
        })
    })
    // TODO: …
});


module.exports = lottery;