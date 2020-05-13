import randomNum from '../utilities.js';
import { engine, roundOfCount } from '../index.js';

const isNumPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getArrOfQuestionsAndResults = () => {
  const arrOfQuestionsAndResults = [];
  for (let i = 0; i < roundOfCount; i += 1) {
    const question = randomNum(1, 50);
    const result = isNumPrime(question) ? 'yes' : 'no';
    arrOfQuestionsAndResults.push([question, result]);
  }
  return arrOfQuestionsAndResults;
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const startPrimeGame = () => {
  const arrOfQuestionsAndResults = getArrOfQuestionsAndResults();
  engine(rule, arrOfQuestionsAndResults);
};

export default () => startPrimeGame();
