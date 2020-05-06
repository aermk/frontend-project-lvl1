import randomNum from '../utilities.js';
import engine from '../index.js';

const arrOfCorrectResult = (num1, sign, num2) => {
  let correct = 0;
  switch (sign) {
    case '+': correct = num1 + num2;
      break;
    case '-': correct = num1 - num2;
      break;
    default: correct = num1 * num2;
  }
  return correct;
};

const arrOfExprissions = () => {
  let questions = 0;
  let results = 0;
  const signs = ['+', '-', '*'];
  const coupleQuestionAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomNum(1, 50);
    const sign = signs[(randomNum(0, 2))];
    const num2 = randomNum(1, 50);
    questions = `${num1} ${sign} ${num2}`;
    results = arrOfCorrectResult(num1, sign, num2);
    coupleQuestionAnswer.push([questions, results]);
  }
  return coupleQuestionAnswer;
};

const getRules = () => 'What is the result of the expression?';

const startCalc = () => {
  const results = arrOfExprissions(); // присваевается значение функции!
  // const correctRess = arrOfCorrectResult();
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, results); // вызывется с присвоенными значениями в index.js
};

export default () => startCalc(); // дефолтная функция, вызывающаяся ИЗ bin (исполняемого файла);
// начинает игру.
