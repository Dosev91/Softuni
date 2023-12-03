const { expect } = require('chai');
const findNewApartment = require('./findApartment'); // Предполагаме, че вашите код е във файл наречен findApartment.js

describe('findNewApartment', function () {
    describe('isGoodLocation', function () {
        it('should return appropriate message for different cities and public transportation', function () {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Burgas', false)).to.equal('This location is not suitable for you.');
        });

        it('should throw an error for invalid input', function () {
            expect(() => findNewApartment.isGoodLocation('Sofia', 'true')).to.throw('Invalid input!');
            expect(() => findNewApartment.isGoodLocation(123, true)).to.throw('Invalid input!');
        });
    });

    describe('isLargeEnough', function () {
        it('should filter apartments based on minimalSquareMeters', function () {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal('50, 60');
            expect(findNewApartment.isLargeEnough([30, 35, 40], 35)).to.equal('35, 40');
        });

        it('should throw an error for invalid input', function () {
            expect(() => findNewApartment.isLargeEnough('apartments', 50)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough([], 50)).to.throw('Invalid input!');
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], '50')).to.throw('Invalid input!');
        });
    });

    describe('isItAffordable', function () {
        it('should check affordability based on price and budget', function () {
            expect(findNewApartment.isItAffordable(200000, 300000)).to.equal('You can afford this home!');
            expect(findNewApartment.isItAffordable(400000, 300000)).to.equal("You don't have enough money for this house!");
        });

        it('should throw an error for invalid input', function () {
            expect(() => findNewApartment.isItAffordable('200000', 300000)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(200000, '300000')).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(-200000, 300000)).to.throw('Invalid input!');
            expect(() => findNewApartment.isItAffordable(200000, -300000)).to.throw('Invalid input!');
        });
    });
});
