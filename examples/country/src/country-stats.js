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
 * @description Module that calculates statistics for a given game
 */

'use strict';

/**
 * Function that returns the object with the highest value of a given property
 * @param {Object} json countries' content
 * @param {String} property attribute of the object
 * @param {Number} quantity number of objects the user wants to return
 * @return {Object|Array} objects with the result
 */
function getMax(json, property, quantity) {
  if (quantity === 1) {
    let object;
    for (let i = 0; i < json.length; i++) {
      if (json[i][property] !== null && (object == null || parseFloat( json[i][property]) > parseFloat(object[property]))) {
        object = json[i];
      }
    }
    return object;
  } else {
    const result = [];
    while (quantity > 0) {
      let object;
      let index = 0;
      for (let i = 0; i < json.length; i++) {
        if (json[i][property] !== null && (object == null || parseFloat( json[i][property]) > parseFloat(object[property]))) {
          object = json[i];
          index = i;
        }
      }
      result.push(object);
      json.splice(index, 1);
      quantity--;
    }
    return result;
  }
}

/**
 * Function that returns the object with the lowest value of a given property
 * @param {Object} json countries' content
 * @param {String} property attribute of the object
 * @param {Number} quantity number of objects the user wants to return
 * @return {Object|Array} objects with the result
 */
function getMin(json, property, quantity) {
  if (quantity === 1) {
    let object;
    for (let i = 0; i < json.length; i++) {
      if (json[i][property] !== null && (object == null || parseFloat(json[i][property]) < parseFloat(object[property]))) {
        object = json[i];
      }
    }
    return object;
  } else {
    const result = [];
    while (quantity > 0) {
      let object;
      let index = 0;
      for (let i = 0; i < json.length; i++) {
        if (json[i][property] !== null && (object == null || parseFloat(json[i][property]) < parseFloat(object[property]))) {
          object = json[i];
          index = i;
        }
      }
      result.push(object);
      json.splice(index, 1);
      quantity--;
    }
    return result;
  }
}

/**
 * Function that returns the countries of a given continent
 * @param {Object} json countries' content
 * @param {String} continent continent's name
 * @return {Array} all countries of the specified continent
 */
function getCountries(json, continent) {
  return json.filter((country) => (country.continent) &&
  country.continent.includes(continent));
}

/**
 * Function that returns the average of a given porperty for a given continent
 * @param {String} continent continent's name
 * @param {String} property attribute of the object
 * @return {Number} average of a given porperty for a given continent
 */
function getAverage(continent, property) {
  let sum = 0;
  let quantity = 0;
  for (const country of continent) {
    if (country[property]) {
      sum += parseFloat(country[property]);
      quantity++;
    }
  }
  return (sum / quantity).toFixed(2);
}

/**
 * Function that returns the percentage of a value for a given porperty
 * @param {Object} json countries' content
 * @param {String} property attribute of the object
 * @param {String} value value of the specified property
 * @return {Number} formatted percentage
 */
function percentage(json, property, value) {
  const countries = json.filter((country) => country[property] !== null);
  return ((countries.filter((country) => country[property] === value).length / countries.length) * 100).toFixed(2);
}

module.exports = {
  getMax,
  getMin,
  getCountries,
  getAverage,
  percentage,
};
