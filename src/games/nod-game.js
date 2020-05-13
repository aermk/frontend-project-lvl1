import randomNum from '../utilities.js';
import { engine, roundOfCount } from '../index.js';

const getNod = (a, b) => {
  if (b) {
    return getNod(b, a % b);
  }
  return Math.abs(a);
};

const getArrOfQuestionsAndResults = () => {
  const arrOfQuestionsAndResults = [];
  for (let i = 0; i < roundOfCount; i += 1) {
    const num1 = randomNum(1, 50);
    const num2 = randomNum(1, 50);
    const question = `${num1} ${num2}`;
    const result = (getNod(num1, num2));
    arrOfQuestionsAndResults.push([question, result]);
  }
  return arrOfQuestionsAndResults;
};

const rule = 'Find the greatest common divisor of given numbers';

const startNodGame = () => {
  const arrOfQuestionsAndResults = getArrOfQuestionsAndResults();
  engine(rule, arrOfQuestionsAndResults);
};

export default () => startNodGame();
