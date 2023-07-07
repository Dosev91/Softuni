const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", () => {
    describe("addFive", () => {
        it("Should return undefined when non-string is provided", () => {
            expect(mathEnforcer.addFive("q")).to.be.equal(undefined);
        });
        it("Should return num + 5", () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it("Should return with floating-point numbers", () => {
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6, 0.1);
        });
    })

    describe("subtractTen", () => {
        it("Should return undefined when non-string is provided", () => {
            expect(mathEnforcer.subtractTen("q")).to.be.equal(undefined);
        });
        it("Should return num + 5", () => {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });
        it("Should return with floating-point numbers", () => {
            expect(mathEnforcer.subtractTen(122.1)).to.be.closeTo(112, 0.1);
        });
    })

    describe("sum", () => {
        it("Should return undefined when non-string is provided", () => {
            expect(mathEnforcer.sum("q", 10)).to.be.equal(undefined);
        });
        it("Should return sum of two numbers", () => {
            expect(mathEnforcer.sum(15, 5)).to.be.equal(20);
        });

    })
})