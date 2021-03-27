const {expect} = require('chai');
const {Rectangle} = require('../src/rectangle');

describe('Rectangle tests', () => {
  const square = new Rectangle(10, 10);
  it('we expected an object', () => {
    expect(square).to.be.an('object');
  });

  it('Square is an object of Rectangle class', () => {
    expect(square instanceof Rectangle).to.equal(true);
  });

  it('Area of a square', () => {
    expect(square.area).to.equal(100);
  });

  it('Area of a rectangle', () => {
    const rectangle = new Rectangle(10, 20);
    expect(rectangle.area).to.equal(200);
  });
});
