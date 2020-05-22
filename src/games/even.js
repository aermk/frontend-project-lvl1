import randomNum from '../utilities.js';
import engine from '../index.js';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = randomNum(1, 50);
  const result = (isEven(question) ? 'yes' : 'no');
  return [question, String(result)];
};

const rule = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const startEvenGame = () => {
  engine(rule, getGameData);
};

export default () => startEvenGame();
