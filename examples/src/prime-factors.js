/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 *
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief Code for Exercism's challenge "prime factors"
 */

'use strict';

/**
 * @description return the prime factors of a number
 * @param  {Number} number
 * @return {Array.<Number>}
 */
const primeFactors = (number) => {
  if (number === 1) return [];
  if (number === 2) return [2];
  if (number === 3) return [3];

  let divisor = 2;
  let rest = number;
  const divisors = [];
  while (rest != 0 && divisor <= rest) {
    if (rest % divisor === 0) {
      rest = rest / divisor;
      divisors.push(divisor);
    } else {
      divisor++;
    }
  }
  return divisors;
};

module.exports = {primeFactors};
