import randomNum from '../utilities.js';
import { engine, roundsCount } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = randomNum(1, 50);
    const result = isPrime(question) ? 'yes' : 'no';
    gameData.push([question, result]);
  }
  return gameData;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const startPrimeGame = () => {
  const gameData = getGameData();
  engine(rule, gameData);
};

export default () => startPrimeGame();
