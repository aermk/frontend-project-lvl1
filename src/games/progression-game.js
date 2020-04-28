import randomNum from '../utilities.js';
import engine from './index.js';

// const results = [];
// const correctAnswer = (expression) => {
//   const separator = expression.indexOf('..');
//   const step = expression[separator + 2] - expression[separator + 1];
//   const correct = expression[separator + 1] - step;
//   results.push(correct);
//   return results;
// };

const results = [];
const correctAnswer = (expression) => {
  let correct = 0;
  let step = 0;
  const separator = expression.indexOf('..');
  if (separator === expression.length - 2) {
    step = (expression[separator + 1] - expression[separator - 1]) / 2;
    correct = expression[separator + 1] - step;
  } else {
    step = expression[separator + 2] - expression[separator + 1];
    correct = expression[separator + 1] - step;
  }
  results.push(correct);
  return results;
};

const arrOfExprissions = () => {
  const questions = [];
  for (let i = 0; i < 3; i += 1) {
    let num = randomNum(1, 50);
    const step = randomNum(1, 9);
    const progression = [];
    for (let k = 0; k < 10; k += 1) {
      progression.push(num);
      num += step;
    }
    const index = randomNum(1, 9);
    progression.splice(index, 1, '..');
    correctAnswer(progression);
    questions.push(progression.join(' '));
  }
  return questions;
};

const getRules = () => 'What number is missing in the progression?';

export const startProgression = () => {
  const expressions = arrOfExprissions(); // присваевается значение функции!
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, expressions, results); // вызывется с присвоенными значениями в index.js
};

export default () => startProgression(); // дефолтная функция, вызывающаяся ИЗ bin;
// начинает игру.
