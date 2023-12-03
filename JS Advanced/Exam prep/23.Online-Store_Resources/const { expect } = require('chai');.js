const { expect } = require('chai');
const onlineStore = require('./onlineStore'); 

describe('onlineStore', function() {
  describe('isProductAvailable', function() {
    it('should return out of stock message if stock quantity is 0', function() {
      const result = onlineStore.isProductAvailable('ProductA', 0);
      expect(result).to.equal('Sorry, ProductA is currently out of stock.');
    });

    it('should return available message if stock quantity is greater than 0', function() {
      const result = onlineStore.isProductAvailable('ProductB', 10);
      expect(result).to.equal('Great! ProductB is available for purchase.');
    });

    it('should throw an error for invalid input', function() {
      expect(() => onlineStore.isProductAvailable('ProductC', 'invalid')).to.throw('Invalid input.');
    });
  });

  describe('canAffordProduct', function() {
    it('should return insufficient funds message if balance is too low', function() {
      const result = onlineStore.canAffordProduct(100, 50);
      expect(result).to.equal("You don't have sufficient funds to buy this product.");
    });

    it('should return purchase success message if balance is sufficient', function() {
      const result = onlineStore.canAffordProduct(50, 100);
      expect(result).to.equal('Product purchased. Your remaining balance is $50.');
    });

    it('should throw an error for invalid input', function() {
      expect(() => onlineStore.canAffordProduct('invalid', 100)).to.throw('Invalid input.');
    });
  });

  describe('getRecommendedProducts', function() {
    const productList = [
      { name: 'ProductA', category: 'CategoryX' },
      { name: 'ProductB', category: 'CategoryY' },
      { name: 'ProductC', category: 'CategoryX' },
    ];

    it('should return recommended products in a category', function() {
      const result = onlineStore.getRecommendedProducts(productList, 'CategoryX');
      expect(result).to.equal('Recommended products in the CategoryX category: ProductA, ProductC');
    });

    it('should return no recommended products message for an empty category', function() {
      const result = onlineStore.getRecommendedProducts(productList, 'CategoryZ');
      expect(result).to.equal('Sorry, we currently have no recommended products in the CategoryZ category.');
    });

    it('should throw an error for invalid input', function() {
      expect(() => onlineStore.getRecommendedProducts('invalid', 'CategoryX')).to.throw('Invalid input.');
    });
  });
});