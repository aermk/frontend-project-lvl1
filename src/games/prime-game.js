import randomNum from '../utilities.js';
import engine from './index.js';

const results = [];
const correctAnswer = (num) => {
  let correct = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num <= 1 || num % i === 0) {
      correct = 'no';
    }
  }
  results.push(correct);
  return results;
};

const arrOfExprissions = () => {
  const questions = [];
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum(1, 50);
    correctAnswer(num);
    questions.push(num);
  }
  return questions;
};

const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no"';

export const startPrime = () => {
  const expressions = arrOfExprissions(); // присваевается значение функции!
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, expressions, results); // вызывется с присвоенными значениями в index.js
};

export default () => startPrime(); // дефолтная функция, вызывающаяся ИЗ bin (исполняемого файла);
// начинает игру.
