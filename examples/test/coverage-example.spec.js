/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * TDD and Code Coverage Presentation
 *
 * @author Marta Julia González Padrón
 * @author Vanessa Valentina Villalba Pérez
 * @see {@link https://github.com/PAI-ULL/2020-2021-pai-trabajo-covering-tdd-vanessa-villalba-marta-gonzalez}
 * @since 28.mar.2021
 * @description Tests to explain how coverage works
 */

const {expect} = require('chai');
const {uselessFunction} = require('../src/coverage-example.js');

describe('Useless function', () => {
  it('Function exists', () => {
    expect(uselessFunction()).to.exist;
  });

  it('Only x value is greater than 0', () => {
    expect(uselessFunction(1, -1)).to.equal(0);
  });

  it('Both values are greater than 0', () => {
    expect(uselessFunction(1, 1)).to.equal(1);
  });
});
