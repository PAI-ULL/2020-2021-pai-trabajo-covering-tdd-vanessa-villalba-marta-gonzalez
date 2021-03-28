// Author: Adal Díaz y Oscar Moreira
// University of La Laguna
const {assert} = require('chai');
const {keep, discard} = require('../src/strain');

describe('strain', () => {
  it('keeps on empty array returns empty array', () => {
    assert.deepEqual(keep([], (e) => e < 10), []);
  });

  it('keeps everything ', () => {
    assert.deepEqual(keep([1, 2, 3], (e) => e < 10), [1, 2, 3]);
  });

  it('keeps first and last', () => {
    assert.deepEqual(keep([1, 2, 3], (e) => e % 2 === 1), [1, 3]);
  });

  it('keeps neither first nor last', () => {
    assert.deepEqual(keep([1, 2, 3, 4, 5], (e) => e % 2 === 0), [2, 4]);
  });

  it('keeps strings', () => {
    const words = 'apple zebra banana zombies cherimoya zelot'.split(' ');
    const result = keep(words, (word) => word.indexOf('z') === 0);
    assert.deepEqual(result, 'zebra zombies zelot'.split(' '));
    assert.deepEqual(result, 'zebra zombies zelot'.split(' '));
  });

  it('keeps arrays', () => {
    const rows = [
      [1, 2, 3],
      [5, 5, 5],
      [5, 1, 2],
      [2, 1, 2],
      [1, 5, 2],
      [2, 2, 1],
      [1, 2, 5],
    ];
    const result = keep(rows, (row) => row.indexOf(5) > -1);
    assert.deepEqual(result, [
      [5, 5, 5],
      [5, 1, 2],
      [1, 5, 2],
      [1, 2, 5],
    ]);
  });

  it('empty discard', () => {
    assert.deepEqual(discard([], (e) => e < 10), []);
  });

  it('discards nothing', () => {
    assert.deepEqual(discard([1, 2, 3], (e) => e > 10), [1, 2, 3]);
  });

  it('discards first and last', () => {
    assert.deepEqual(discard([1, 2, 3], (e) => e % 2 === 1), [2]);
  });

  it('discards neither first nor last', () => {
    const result = discard([1, 2, 3, 4, 5], (e) => e % 2 === 0);
    assert.deepEqual(result, [1, 3, 5]);
  });

  it('discards strings', () => {
    const words = 'apple zebra banana zombies cherimoya zelot'.split(' ');
    const result = discard(words, (word) => word.indexOf('z') === 0);
    assert.deepEqual(result, 'apple banana cherimoya'.split(' '));
  });

  it('discards arrays', () => {
    const rows = [
      [1, 2, 3],
      [5, 5, 5],
      [5, 1, 2],
      [2, 1, 2],
      [1, 5, 2],
      [2, 2, 1],
      [1, 2, 5],
    ];
    const result = discard(rows, (row) => row.indexOf(5) > -1);
    assert.deepEqual(result, [
      [1, 2, 3],
      [2, 1, 2],
      [2, 2, 1],
    ]);
  });
});
