const { expect } = require('chai');
const carService = require('./carService');

describe('carService', function() {
    describe('isItExpensive', function() {
      it('should return a more severe issue message for Engine or Transmission', function() {
        expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
        expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
      });
  
      it('should return a cheaper price message for other issues', function() {
        expect(carService.isItExpensive('Tire')).to.equal('The overall price will be a bit cheaper');
        expect(carService.isItExpensive('Oil Change')).to.equal('The overall price will be a bit cheaper');
      });
    });
  
    describe('discount', function() {
      it('should return a message for no discount when numberOfParts <= 2', function() {
        expect(carService.discount(2, 100)).to.equal('You cannot apply a discount');
      });
  
      it('should calculate and return the applied discount', function() {
        expect(carService.discount(8, 200)).to.equal('Discount applied! You saved $60');
        expect(carService.discount(5, 150)).to.equal('Discount applied! You saved $22.5');
      });
  
      it('should throw an error for invalid input', function() {
        expect(() => carService.discount('invalid', 100)).to.throw('Invalid input');
      });
    });
  
    describe('partsToBuy', function() {
      const partsCatalog = [
        { part: 'blowoff valve', price: 145 },
        { part: 'coil springs', price: 230 },
       
      ];
  
      it('should calculate the total price of the needed parts', function() {
        const neededParts = ['blowoff valve', 'coil springs'];
        expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(375);
      });
  
      it('should return 0 if partsCatalog is empty', function() {
        const emptyCatalog = [];
        const neededParts = ['blowoff valve', 'coil springs'];
        expect(carService.partsToBuy(emptyCatalog, neededParts)).to.equal(0);
      });
  
      it('should throw an error for invalid input', function() {
        expect(() => carService.partsToBuy('invalid', ['partA', 'partB'])).to.throw('Invalid input');
      });
    });
  });