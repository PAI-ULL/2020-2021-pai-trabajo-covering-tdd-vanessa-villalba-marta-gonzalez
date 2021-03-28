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
 * @since 25.mar.2021
 * @description Tests for the basket-stats module
 */

const {expect} = require('chai');
const basket = require('../src/basket-stats');

const game = require('../data/20160502_Hawks-Pacers-game-data.json');
const gameModified = require('../data/Hawks-Pacers-game-modified.json');

describe('Hawks-Pacers', () => {
  it('Game ID', () => {
    expect(basket.theGame(game)[0]).to.equal('0021500750');
  });

  it('Pacers score', () => {
    expect(basket.gameResult(game)[1][0]).to.equal(96);
  });

  it('Hawkers score', () => {
    expect(basket.gameResult(game)[1][1]).to.equal(102);
  });

  it('Name of Player with most rebounds', () => {
    expect(basket.maxRebounder(game).firstName).to.equal('Lavoy');
  });

  it('Name of Guard with highest 3 point percentage', () => {
    expect(basket.highestThreePointsPercentage(game, 'G').firstName).to.equal('George');
  });

  it('Players that had at least one assist', () => {
    expect(basket.playersWithAssists(game).length).to.equal(14);
  });

  it('Attempted the most free throws', () => {
    expect(basket.moreFreeThrows(game)[0]).to.equal('Hawks');
  });

  it('Attempted the most free throws', () => {
    expect(basket.moreFreeThrows(gameModified)[0]).to.equal('Pacers');
  });

  it('Hawks\' players with more turnovers than assists', () => {
    expect(basket.playersWithMoreTurnoversThanAssists(game)[0].length).to.equal(6);
  });

  it('Peacers\' players with more turnovers than assists', () => {
    expect(basket.playersWithMoreTurnoversThanAssists(game)[1].length).to.equal(2);
  });
});
