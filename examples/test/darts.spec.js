// Author: Adal Díaz y Oscar Moreira
// University of La Laguna
const {assert} = require('chai');
const {score} = require('../src/darts.js');

describe('Darts', () => {
  describe('Darts tests using ASSERT interface from CHAI module: ', () => {
    it('Missed target', () => {
      assert.equal(score(-9, 9), 0);
    });

    it('On the outer circle', () => {
      assert.equal(score(0, 10), 1);
    });

    it('On the middle circle', () => {
      assert.equal(score(-5, 0), 5);
    });

    it('On the inner circle', () => {
      assert.equal(score(0, -1), 10);
    });

    it('Exactly on centre', () => {
      assert.equal(score(0, 0), 10);
    });

    it('Near the centre', () => {
      assert.equal(score(-0.1, -0.1), 10);
    });

    it('Just within the inner circle', () => {
      assert.equal(score(0.7, 0.7), 10);
    });

    it('Just outside the inner circle', () => {
      assert.equal(score(0.8, -0.8), 5);
    });

    it('Just within the middle circle', () => {
      assert.equal(score(-3.5, 3.5), 5);
    });

    it('Just outside the middle circle', () => {
      assert.equal(score(-3.6, -3.6), 1);
    });

    it('Just within the outer circle', () => {
      assert.equal(score(-7.0, 7.0), 1);
    });

    it('Just outside the outer circle', () => {
      assert.equal(score(7.1, -7.1), 0);
    });

    it('Asymmetric position between the inner and middle circles', () => {
      assert.equal(score(0.5, -4), 5);
    });
  });
});
