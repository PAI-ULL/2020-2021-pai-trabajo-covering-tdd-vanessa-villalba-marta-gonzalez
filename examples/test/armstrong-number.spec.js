// Author: Adal Díaz & Oscar Moreira
// University of La Laguna

const {expect} = require('chai');
const {isArmstrongNumber} = require('../src/armstrong-numbers.js');

describe('Armstrong Numbers', () => {
  describe('Armstrong Numbers tests using EXPECT interface from CHAI module: ', () => {
    it('Zero is an Armstrong number', () => {
      expect(isArmstrongNumber(0)).to.equal(true);
    });

    it('Single digit numbers are Armstrong numbers', () => {
      expect(isArmstrongNumber(5)).to.equal(true);
    });

    it('There are no 2 digit Armstrong numbers', () => {
      expect(isArmstrongNumber(10)).to.equal(false);
    });

    it('Three digit number that is an Armstrong number', () => {
      expect(isArmstrongNumber(153)).to.equal(true);
    });

    it('Three digit number that is not an Armstrong number', () => {
      expect(isArmstrongNumber(100)).to.equal(false);
    });

    it('Four digit number that is an Armstrong number', () => {
      expect(isArmstrongNumber(9474)).to.equal(true);
    });

    it('Four digit number that is not an Armstrong number', () => {
      expect(isArmstrongNumber(9475)).to.equal(false);
    });

    it('Seven digit number that is an Armstrong number', () => {
      expect(isArmstrongNumber(9926315)).to.equal(true);
    });

    it('Seven digit number that is not an Armstrong number', () => {
      expect(isArmstrongNumber(9926314)).to.equal(false);
    });
  });
});
