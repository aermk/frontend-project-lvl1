import randomNum from '../utilities.js';
import { engine, roundOfCount } from '../index.js';

const getSolution = (num1, sign, num2) => {
  let correctAnswer;
  switch (sign) {
    case '+': correctAnswer = num1 + num2;
      break;
    case '-': correctAnswer = num1 - num2;
      break;
    case '*': correctAnswer = num1 * num2;
      break;
    default: return null;
  }
  return correctAnswer;
};

const getArrOfQuestionsAndResults = () => {
  const arrOfSigns = ['+', '-', '*'];
  const arrOfQuestionsAndResults = [];
  for (let i = 0; i < roundOfCount; i += 1) {
    const num1 = randomNum(1, 50);
    const sign = arrOfSigns[(randomNum(0, 2))];
    const num2 = randomNum(1, 50);
    const question = `${num1} ${sign} ${num2}`;
    const result = getSolution(num1, sign, num2);
    arrOfQuestionsAndResults.push([question, result]);
  }
  return arrOfQuestionsAndResults;
};

const rule = 'What is the result of the expression?';

const startCalcGame = () => {
  const arrOfQuestionsAndResults = getArrOfQuestionsAndResults();
  engine(rule, arrOfQuestionsAndResults);
};

export default () => startCalcGame();
