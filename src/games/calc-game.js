import randomNum from '../utilities.js';
import engine from './index.js';

const randomSign = () => {
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];
  return sign;
};

const results = [];
const arrOfCorrectResult = (num1, sign, num2) => {
  if (sign === '+') {
    results.push(num1 + num2);
  }
  if (sign === '-') {
    results.push(num1 - num2);
  }
  if (sign === '*') {
    results.push(num1 * num2);
  }
  return results;
};

const arrOfExprissions = () => {
  const questions = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomNum(1, 50);
    const sign = randomSign();
    const num2 = randomNum(1, 50);
    arrOfCorrectResult(num1, sign, num2);
    questions.push(`${num1} ${sign} ${num2}`);
  }
  return questions;
};

const getRules = () => 'What is the result of the expression?';

export const startCalc = () => {
  const expressions = arrOfExprissions(); // присваевается значение функции!
  // const correctRess = arrOfCorrectResult();
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, expressions, results); // вызывется с присвоенными значениями в index.js
};

export default () => startCalc(); // дефолтная функция, вызывающаяся ИЗ bin (исполняемого файла);
// начинает игру.
