import engine from '../index.js';
import randomNum from '../utilities.js';

export const nod = (a, b) => {
  if (b) {
    return nod(b, a % b);
  }
  return Math.abs(a);
};

const exprissionsAndAnswers = () => {
  let questions = 0;
  let results = 0;
  const coupleQuestionAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomNum(1, 50);
    const num2 = randomNum(1, 50);
    questions = `${num1} ${num2}`;
    results = (nod(num1, num2));
    coupleQuestionAnswer.push([questions, results]);
  }
  return coupleQuestionAnswer;
};

const getRules = () => 'Find the greatest common divisor of given numbers';

const startNod = () => {
  const results = exprissionsAndAnswers(); // присваевается значение функции!
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, results); // вызывется с присвоенными значениями в index.js
};

// дефолтная функция, вызывающаяся ИЗ bin (исполняемого файла);
// начинает игру.
export default () => startNod();
