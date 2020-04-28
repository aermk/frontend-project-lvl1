import engine from './index.js';
import randomNum from '../utilities.js';

export const nod = (a, b) => { // не работает, возвращает  [Circular *1] в массиве
  if (b) {
    // result.push(resultsOfGame(b, a % b));
    return nod(b, a % b);
  }
  // } else {
  //   // result.push(Math.abs(a));
  //   return Math.abs(a);
  // }
  // return result;
  return Math.abs(a);
};

const exprissionsAndAnswers = () => {
  const questions = [];
  const results = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomNum(1, 50);
    const num2 = randomNum(1, 50);
    questions.push(`${num1} ${num2}`);
    results.push(nod(num1, num2));
  }
  return [questions, results];
};

const getRules = () => 'Find the greatest common divisor of given numbers';

export const startNod = () => {
  const [expressions, results] = exprissionsAndAnswers(); // присваевается значение функции!
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, expressions, results); // вызывется с присвоенными значениями в index.js
};

// дефолтная функция, вызывающаяся ИЗ bin (исполняемого файла);
// начинает игру.
export default () => startNod();
