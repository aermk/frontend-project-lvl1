import randomNum from '../utilities.js';
import { engine, roundOfCount } from '../index.js';

const isNumEven = (num) => num % 2 === 0;

const getArrOfQuestionsAndResults = () => {
  const arrOfQuestionsAndResults = [];
  for (let i = 0; i < roundOfCount; i += 1) {
    const question = randomNum(1, 50);
    const result = (isNumEven(question) ? 'yes' : 'no');
    arrOfQuestionsAndResults.push([question, result]);
  }
  return arrOfQuestionsAndResults;
};

const rule = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const startEvenGame = () => {
  const arrOfQuestionsAndResults = getArrOfQuestionsAndResults();
  engine(rule, arrOfQuestionsAndResults);
};

export default () => startEvenGame();
