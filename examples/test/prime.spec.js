// Author: Adal Díaz y Oscar Moreira
// University of La Laguna
const {primeFactors} = require('../src/prime-factors');
const {expect} = require('chai');

describe('returns prime factors for the given input number', () => {
  it('no factors', () => expect(primeFactors(1)).to.eql([]));

  it('prime number', () => expect(primeFactors(2)).to.eql([2]));

  it('another prime number', () => expect(primeFactors(3)).to.eql([3]));

  it('square of a prime', () => expect(primeFactors(9)).to.eql([3, 3]));

  it('product of first prime', () =>
    expect(primeFactors(4)).to.eql([2, 2]));

  it('cube of a prime', () => expect(primeFactors(8)).to.eql([2, 2, 2]));

  it('product of second prime', () =>
    expect(primeFactors(27)).to.eql([3, 3, 3]));

  it('product of third prime', () =>
    expect(primeFactors(625)).to.eql([5, 5, 5, 5]));

  it('product of first prime and second prime', () =>
    expect(primeFactors(6)).to.eql([2, 3]));

  it('product of primes and non-primes', () =>
    expect(primeFactors(12)).to.eql([2, 2, 3]));

  it('product of primes', () =>
    expect(primeFactors(901255)).to.eql([5, 17, 23, 461]));

  it('factors include a large prime', () =>
    expect(primeFactors(93819012551)).to.eql([11, 9539, 894119]));
});
