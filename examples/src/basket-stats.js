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
 * Function that given a game takes its id
 * and its players properties
 *
 * @param {Object} gameInformation JSON containing game information
 * @return {String|Array} Array containing the game ID
 * and an array containing the properties for the players
 */
const theGame = function(gameInformation) {
  const properties = Object.getOwnPropertyNames(gameInformation.players[0]);
  const gameId = gameInformation.id;
  return [gameId, properties];
};

/**
 * Function that given a game and a team name
 * returns its players
 *
 * @param {Object} gameInformation JSON containing game information
 * @param {String} team Team name
 * @return {Object} array of objects that contain the players
 */

const getPlayersFromTeam = function(gameInformation, team) {
  const teamPlayers = gameInformation.players.filter((player) => player.teamName === team);
  return teamPlayers;
};

/**
 * Function that given a game returns both teams
 *
 * @param {Object} gameInformation JSON containing game information
 * @return {Array} Both team names
 */
const getTeamNames = function(gameInformation) {
  const teams = [];
  teams.push(gameInformation.players[0].teamName);
  teams.push(gameInformation.players.find((player) => player.teamName !== teams[0]).teamName);
  return teams;
};

/**
 * Function that given a game calculates the final score
 * for both teams
 *
 * @param {Object} gameInformation JSON containing game information
 * @return {Array|Array} team names and their corresponding result
 */
const gameResult = function(gameInformation) {
  const teamNames = getTeamNames(gameInformation);
  const teams = [];
  teams.push(getPlayersFromTeam(gameInformation, teamNames[0]));
  teams.push(getPlayersFromTeam(gameInformation, teamNames[1]));
  const resultOfGame = [0, 0];
  teams.forEach((team, index) => {
    team.forEach(function(player) {
      resultOfGame[index] += (player.threePointersMade * 3) +
      ((player.fieldGoalsMade - player.threePointersMade) * 2) +
      player.freeThrowsMade;
    });
  });
  return [teamNames, resultOfGame];
};

/**
 * Function that given a game gets the player with most rebounds
 *
 * @param {Object} gameInformation JSON containing game information
 * @return {Object} player with most rebounds
 */
const maxRebounder = function(gameInformation) {
  let rebounder = {};
  let max = 0;
  gameInformation.players.forEach((player) => {
    const current = (player.reboundsOffensive + player.reboundsDefensive);
    if (current > max) {
      rebounder = player;
      max = current;
    }
  });
  return rebounder;
};

/**
 * Function that given a game calculates which player
 * has the highest three points percentage
 *
 * @param {Object} gameInformation JSON containing game information
 * @param {String} position position of the player
 * @return {Object} player with highest three points percentage
 */
const highestThreePointsPercentage = function(gameInformation, position) {
  let max = 0;
  let guard = {};
  gameInformation.players
    .filter((player) => (player.positionShort === 'G') &&
    player.threePointersAttempted > 0)
    .forEach((player) => {
      const current = (player.threePointersMade / player.threePointersAttempted);
      if (current > max) {
        guard = player;
        max = current;
      }
    });
  return guard;
};

/**
 * Function that given a game gets the players with
 * at least one assist
 *
 * @param {Object} gameInformation JSON containing game information
 * @return {Object} Players
 */
const playersWithAssists = function(gameInformation) {
  return gameInformation.players.filter((player) => player.assists > 0);
};

/**
 * Function that given a game calculates the number of free throws for each team
 *
 * @param {Object} gameInformation JSON containing game information
 * @return {String|Number|String|Number} Both teams and their number of three throws
 */
const moreFreeThrows = function(gameInformation) {
  const teamNames = getTeamNames(gameInformation);
  const teams = [];
  teamNames.forEach((teamName) => teams.push(getPlayersFromTeam(gameInformation, teamName)));
  const freeThrowsAttempted = [0, 0];
  gameInformation.players.forEach((player) => {
    if (player.teamName === teamNames[0]) {
      freeThrowsAttempted[0] += player.freeThrowsAttempted;
    } else {
      freeThrowsAttempted[1] += player.freeThrowsAttempted;
    }
  });
  if (freeThrowsAttempted[0] > freeThrowsAttempted[1]) {
    return [teamNames[0], freeThrowsAttempted[0], teamNames[1], freeThrowsAttempted[1]];
  } else {
    return [teamNames[1], freeThrowsAttempted[1], teamNames[0], freeThrowsAttempted[0]];
  }
};

/**
 * Function that given a game returns for each team the players
 * that have more turnovers than assists
 *
 * @param {Object} gameInformation JSON containing game information
 * @return {Array} One position for each team
 */
const playersWithMoreTurnoversThanAssists = function(gameInformation) {
  const teamNames = getTeamNames(gameInformation);
  const teams = [];
  teamNames.forEach((teamName) => teams.push(getPlayersFromTeam(gameInformation, teamName)));
  const playersResult = [];
  teams.forEach((team) => {
    playersResult.push(team.filter((player) => player.turnovers > player.assists));
  });
  return playersResult;
};

module.exports = {
  theGame,
  getPlayersFromTeam,
  getTeamNames,
  gameResult,
  maxRebounder,
  highestThreePointsPercentage,
  playersWithAssists,
  moreFreeThrows,
  playersWithMoreTurnoversThanAssists,
};
