import randomNum from '../utilities.js';
import engine from '../index.js';

const isNumEven = (numberOfArray) => {
  if (numberOfArray % 2 === 0) {
    return true;
  }
  return false;
};

const arrOfExprissions = () => {
  let results = '';
  let questions = 0;
  const coupleQuestionAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    questions = randomNum(1, 50);
    results = (isNumEven(questions) ? 'yes' : 'no');
    coupleQuestionAnswer.push([questions, results]);
  }
  return coupleQuestionAnswer;
};

const getRules = () => "Answer 'yes' if the number is even, otherwise answer 'no'.";

const startEven = () => {
  const results = arrOfExprissions(); // присваевается значение функции!
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, results); // вызывется с присвоенными значениями в index.js
};

export default () => startEven(); // дефолтная функция, вызывающаяся ИЗ bin (исполняемого файла);
// начинает игру.
