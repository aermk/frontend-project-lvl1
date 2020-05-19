import randomNum from '../utilities.js';
import { engine, roundsCount } from '../index.js';

const getGreatestCommonDivisor = (num1, num2) => {
  if (num2) {
    return getGreatestCommonDivisor(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = randomNum(1, 50);
    const num2 = randomNum(1, 50);
    const question = `${num1} ${num2}`;
    const result = (getGreatestCommonDivisor(num1, num2));
    gameData.push([question, result]);
  }
  return gameData;
};

const rule = 'Find the greatest common divisor of given numbers';

const startGcdGame = () => {
  const gameData = getGameData();
  engine(rule, gameData);
};

export default () => startGcdGame();
