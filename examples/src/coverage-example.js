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
 * @description Program used to explain how code coverage works
 */

'use strict';

/**
 * Function that does various calculations depending on the input values
 *
 * @param {Number} x
 * @param {Number} y
 * @return {Number} Calculations results
 */
const uselessFunction = function(x, y) {
  let z = 0;
  if ((x > 0) && (y > 0)) {
    z = x;
  } else if ((x > 0) || (y > 0)) {
    z = x + y;
  }
  return z;
};

module.exports = {uselessFunction};
