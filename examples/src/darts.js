/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief Code for Exercism's challenge "Darts"
 */

'use strict';

/**
 * @description The function score returns the corresponding score, depending on the given coordinates.
 * @param  {Number} coorX
 * @param  {Number} coorY
 * @return {Number} Number
 */
const score = (coorX, coorY) => {
  const circunferenceFormula = Math.pow(coorX, 2) + Math.pow(coorY, 2);

  switch (true) {
  case circunferenceFormula <= 1:
    return 10;
  case circunferenceFormula <= 25:
    return 5;
  case circunferenceFormula <= 100:
    return 1;
  default:
    return 0;
  }
};

module.exports = {score};
