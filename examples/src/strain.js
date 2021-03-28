/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief Code for Exercism's challenge "strain"
 */

'use strict';

/**
 * @description Function to know the elements that the predicate is true
 * @param {Array} collection
 * @param {Function} predicate
 * @return {Array} array with elements that the predicate is true
 */
const keep = (collection, predicate) => {
  const keepArray = collection.filter((element) => predicate(element) == true);
  return keepArray;
};

/**
 * @description Function to know the elements that the predicate is false
 * @param  {Array} collection=[]
 * @param  {Function} predicate
 * @return {Array} array with elements that the predicate is false
 */
const discard = (collection, predicate) => {
  const discardArray = collection.filter((element) => predicate(element) == false);
  return discardArray;
};

module.exports = {keep, discard};
