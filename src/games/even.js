import randomNum from '../utilities.js';
import { engine, roundsCount } from '../index.js';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = randomNum(1, 50);
    const result = (isEven(question) ? 'yes' : 'no');
    gameData.push([question, result]);
  }
  return gameData;
};

const rule = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const startEvenGame = () => {
  const gameData = getGameData();
  engine(rule, gameData);
};

export default () => startEvenGame();
