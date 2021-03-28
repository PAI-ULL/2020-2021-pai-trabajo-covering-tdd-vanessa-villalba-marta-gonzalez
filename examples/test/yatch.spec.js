// Author: Adal Díaz y Oscar Moreira
// University of La Laguna
const {expect} = require('chai');
const {score} = require('../src/yatch');

describe('Yacht', () => {
  it('Yacht', () => {
    expect(score([5, 5, 5, 5, 5], 'yacht')).to.equal(50);
  });

  it('Not Yacht', () => {
    expect(score([1, 3, 3, 2, 5], 'yacht')).to.equal(0);
  });

  it('Ones', () => {
    expect(score([1, 1, 1, 3, 5], 'ones')).to.equal(3);
  });

  it('Ones, out of order', () => {
    expect(score([3, 1, 1, 5, 1], 'ones')).to.equal(3);
  });

  it('No ones', () => {
    expect(score([4, 3, 6, 5, 5], 'ones')).to.equal(0);
  });

  it('Twos', () => {
    expect(score([2, 3, 4, 5, 6], 'twos')).to.equal(2);
  });

  it('Fours', () => {
    expect(score([1, 4, 1, 4, 1], 'fours')).to.equal(8);
  });

  it('Yacht counted as threes', () => {
    expect(score([3, 3, 3, 3, 3], 'threes')).to.equal(15);
  });

  it('Yacht of 3s counted as fives', () => {
    expect(score([3, 3, 3, 3, 3], 'fives')).to.equal(0);
  });

  it('Sixes', () => {
    expect(score([2, 3, 4, 5, 6], 'sixes')).to.equal(6);
  });

  it('Full house two small, three big', () => {
    expect(score([2, 2, 4, 4, 4], 'full house')).to.equal(16);
  });

  it('Full house three small, two big', () => {
    expect(score([5, 3, 3, 5, 3], 'full house')).to.equal(19);
  });

  it('Two pair is not a full house', () => {
    expect(score([2, 2, 4, 4, 5], 'full house')).to.equal(0);
  });

  it('Four of a kind is not a full house', () => {
    expect(score([1, 4, 4, 4, 4], 'full house')).to.equal(0);
  });

  it('Yacht is not a full house', () => {
    expect(score([2, 2, 2, 2, 2], 'full house')).to.equal(0);
  });

  it('Four of a Kind', () => {
    expect(score([6, 6, 4, 6, 6], 'four of a kind')).to.equal(24);
  });

  it('Yacht can be scored as Four of a Kind', () => {
    expect(score([3, 3, 3, 3, 3], 'four of a kind')).to.equal(12);
  });

  it('Full house is not Four of a Kind', () => {
    expect(score([3, 3, 3, 5, 5], 'four of a kind')).to.equal(0);
  });

  it('Little Straight', () => {
    expect(score([3, 5, 4, 1, 2], 'little straight')).to.equal(30);
  });

  it('Little Straight as Big Straight', () => {
    expect(score([1, 2, 3, 4, 5], 'big straight')).to.equal(0);
  });

  it('Four in order but not a little straight', () => {
    expect(score([1, 1, 2, 3, 4], 'little straight')).to.equal(0);
  });

  it('No pairs but not a little straight', () => {
    expect(score([1, 2, 3, 4, 6], 'little straight')).to.equal(0);
  });

  it('Minimum is 1, maximum is 5, but not a little straight', () => {
    expect(score([1, 1, 3, 4, 5], 'little straight')).to.equal(0);
  });

  it('Big Straight', () => {
    expect(score([4, 6, 2, 5, 3], 'big straight')).to.equal(30);
  });

  it('Big Straight as little straight', () => {
    expect(score([6, 5, 4, 3, 2], 'little straight')).to.equal(0);
  });

  it('No pairs but not a big straight', () => {
    expect(score([6, 5, 4, 3, 1], 'big straight')).to.equal(0);
  });

  it('Choice', () => {
    expect(score([3, 3, 5, 6, 6], 'choice')).to.equal(23);
  });

  it('Yacht as choice', () => {
    expect(score([2, 2, 2, 2, 2], 'choice')).to.equal(10);
  });

  it('Not existing category', () => {
    expect(score([2, 2, 2, 2, 2], 'unexisting')).to.equal(undefined);
  });
});
