import randomNum from '../utilities.js';
import engine from './index.js';

const resultsOfGame = [];
const correctResult = (numberOfArray) => {
  if (numberOfArray % 2 === 0) {
    resultsOfGame.push('yes');
  } else if (numberOfArray % 2 !== 0) {
    resultsOfGame.push('no');
  }
  return resultsOfGame;
};

const arrOfExprissions = () => {
  const questions = [];
  let num = 0;
  for (let i = 0; i < 3; i += 1) {
    num = randomNum(1, 50);
    correctResult(num);
    questions.push(num);
  }
  return questions;
};

const getRules = () => "Answer 'yes' if the number is even, otherwise answer 'no'.";

export const startEven = () => {
  const expressions = arrOfExprissions(); // присваевается значение функции!
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, expressions, resultsOfGame); // вызывется с присвоенными значениями в index.js
};

export default () => startEven(); // дефолтная функция, вызывающаяся ИЗ bin (исполняемого файла);
// начинает игру.
