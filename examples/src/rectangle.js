/**
 * University of La Laguna
 * Computer engineering
 * Subject: Programming of interactive applications
 *
 * @author Óscar Moreira Estévez
 * @author Adal Díaz Fariña
 * @date 14-03-2021
 * @brief "Example of a class"
 */

'use strict';

/**
 * Class to create a rectangle
 * @class
 */
class Rectangle {
  /**
   * Constructor of the class rectangle
   * @param  {Number} height
   * @param  {Number} width
   * @property {Number} height
   * @property {Number} width
   */
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  /**
   * @description Function that returns the area
   * @return {Number} return the area
   */
  get area() {
    return this.calcArea();
  }

  /**
   * @description Function that calculate the area
   * @return {Number} return the area
   */
  calcArea() {
    return this.height * this.width;
  }
}

module.exports = {Rectangle};
