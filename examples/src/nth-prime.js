/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief Code for Exercism's challenge "prime factors"
 */

/**
 * @description The function calculate the prime number on the given position.
 * @param  {Number} num
 * @return {Number}
 */
const prime = (num) => {
  if (num === 0) {
    throw new Error('there is no zeroth prime');
  }
  let counter = 0;
  let isDivisible;
  for (let numerator = 2; numerator < Infinity; numerator++) {
    isDivisible = false;
    for (let dividend = 2; dividend < numerator; dividend++) {
      if (numerator % dividend === 0) {
        isDivisible = true;
      }
    }
    if (!isDivisible) {
      counter += 1;
    }
    if (counter === num) {
      return numerator;
    }
  }
};

module.exports = {prime};
