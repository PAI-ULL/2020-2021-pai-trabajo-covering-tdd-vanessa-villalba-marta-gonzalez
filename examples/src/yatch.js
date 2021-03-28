/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 *
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief Code for Exercism's challenge "yatch"
 */

'use strict';

/**
  * @description Calculate total puntuations depends of the category
  * @param  {Array.<Object>} puntuations
  * @param  {String} category
  * @return {Number}
  */
const score = (puntuations, category) => {
  switch (category) {
  case 'yacht':
    return calculatePointsYacht(puntuations);
  case 'ones':
    return calculatePointsNumbers(puntuations, 1);
  case 'twos':
    return calculatePointsNumbers(puntuations, 2);
  case 'threes':
    return calculatePointsNumbers(puntuations, 3);
  case 'fours':
    return calculatePointsNumbers(puntuations, 4);
  case 'fives':
    return calculatePointsNumbers(puntuations, 5);
  case 'sixes':
    return calculatePointsNumbers(puntuations, 6);
  case 'full house':
    return calcultePointsFullHouse(puntuations);
  case 'four of a kind':
    return calcultePointsFourOfKinds(puntuations);
  case 'little straight':
    return calcultePointsLittleStraight(puntuations);
  case 'big straight':
    return calcultePointsBigStraight(puntuations);
  case 'choice':
    return calcultePointsChoice(puntuations);
  default:
    break;
  }
};

/**
  * @description Calculate the points if the category is yacht
  * @param  {Array.<Number>} points
  * @return {number}
  */
const calculatePointsYacht = (points) => {
  if (points.find((element) => element !== 5)) return 0;
  return 50;
};

/**
  * @description Calculate the points of one type of category ones to sixes
  * @param  {Array.<Number>} points
  * @param  {number} number
  * @return {number}
  */
const calculatePointsNumbers = (points, number) => {
  const sumPoints = points.filter((numberPoint) => numberPoint === number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sumPoints;
};

/**
  * @description Returns the sum of all elements of the array as points if there are 3 same elementes and 2. [3, 3, 3, 5, 5]
  * @param  {Array.<Number>} points
  * @return {number}
  */
const calcultePointsFullHouse = (points) => {
  const numbersFullHouse = points.filter((number) => frequencyOfNumber(points, number) >= 2 &&
                                                 frequencyOfNumber(points, number) <= 3);
  if (numbersFullHouse.length === 5) {
    return numbersFullHouse.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  return 0;
};

/**
  * @description Returns the sum of all elements of the array as points if there are 3 same elementes and 2. [3, 3, 3, 5, 5]
  * @param  {Array.<Number>} points
  * @return {number}
  */
const calcultePointsFourOfKinds = (points) => {
  const sameNumbers = points.filter((number) => frequencyOfNumber(points, number) >= 4);

  if (sameNumbers.length >= 4) {
    return sameNumbers[0] * 4;
  }
  return 0;
};

/**
  * @description Returns 30 points if the numbers of the arrays are little straight [1-2-3-4-5]
  * @param  {Array.<Number>} points
  * @return {number}
  */
const calcultePointsLittleStraight = (points) => {
  const sumPoints = points.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sumPoints === 15) {
    return 30;
  }
  return 0;
};

/**
  * @description Returns 30 points if the numbers of the arrays are bigstraight [2-3-4-5-6]
  * @param  {Array.<Number>} points
  * @return {number}
  */
const calcultePointsBigStraight = (points) => {
  const sumPoints = points.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sumPoints === 20) {
    return 30;
  }
  return 0;
};

/**
  * @description Returns the sum of all elements of the array as points
  * @param  {Array.<Number>} points
  * @return {number}
  */
const calcultePointsChoice = (points) => {
  const sumPoints = points.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sumPoints;
};

/**
  * @description Calculate the times of a number appears in an array
  * @param  {Array.<Number>} arrayNumbers
  * @param  {Number} number
  * @return {number}
  */
const frequencyOfNumber = (arrayNumbers, number) => {
  let totalNumber = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] == number) {
      totalNumber++;
    }
  }
  return totalNumber;
};

module.exports = {score};
