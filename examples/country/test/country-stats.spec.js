/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * TDD and Code Coverage Presentation
 * @author Marta Julia González Padrón
 * @author Vanessa Valentina Villalba Pérez
 * @see {@link https://github.com/PAI-ULL/2020-2021-pai-trabajo-covering-tdd-vanessa-villalba-marta-gonzalez}
 * @since 25.mar.2021
 * @description Tests for the country-stats module
 */

const {expect} = require('chai');
const stats = require('../src/country-stats');
const countryInformation = require('../country-data.json');

describe('Country Statistics', () => {
  it('Country with highest population', () => {
    expect(stats.getMax(countryInformation, 'population', 1).country).to.eql('China');
  });

  it('Country with lowest population', () => {
    expect(stats.getMin(countryInformation, 'population', 1).country).to.eql('Pitcairn');
  });

  it('3 countries with highest life expectancy', () => {
    expect(stats.getMax(countryInformation, 'expectancy', 3)).to.have.lengthOf(3);
  });

  it('3 countries with lowest life expectancy', () => {
    expect(stats.getMin(countryInformation, 'expectancy', 3)).to.have.lengthOf(3);
  });

  it('Countries in Asia', () => {
    expect(stats.getCountries(countryInformation, 'Asia')).to.have.lengthOf(47);
  });

  it('Average of countrie\'s average height in Asia', () => {
    const asianCountries = stats.getCountries(countryInformation, 'Asia');
    expect(stats.getAverage(asianCountries, 'height')).to.eql('167.40');
  });

  it('Percentage of Islamic Countries', () => {
    expect(stats.percentage(countryInformation, 'religion', 'Islam')).to.deep.equal('22.97');
  });
});
