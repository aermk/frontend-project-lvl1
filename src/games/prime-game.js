import randomNum from '../utilities.js';
import engine from '../index.js';

const isNumPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num <= 1 || num % i === 0) {
      return false;
    }
  }
  return true;
};

const arrOfExprissions = () => {
  let questions = 0;
  let results = '';
  const coupleQuestionAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    questions = randomNum(1, 50);
    results = isNumPrime(questions) ? 'yes' : 'no';
    coupleQuestionAnswer.push([questions, results]);
  }
  return coupleQuestionAnswer;
};

const getRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no"';

const startPrime = () => {
  const results = arrOfExprissions(); // присваевается значение функции!
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, results); // вызывется с присвоенными значениями в index.js
};

export default () => startPrime(); // дефолтная функция, вызывающаяся ИЗ bin (исполняемого файла);
// начинает игру.
