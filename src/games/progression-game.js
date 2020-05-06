import randomNum from '../utilities.js';
import engine from '../index.js';

// const correctAnswer = (expression, step) => {
//   let correct = 0;
//   const numOfGap = expression.indexOf('..');
//   if (numOfGap === 0) {
//     correct = expression[numOfGap + 1] - (step * (numOfGap + 1));
//   } else {
//     correct = expression[0] + (step * numOfGap);
//   }
//   return correct;
// };

// const arrOfExprissions = () => {
//   const questions = [];
//   const results = [];
//   for (let i = 0; i < 3; i += 1) {
//     let num = randomNum(1, 50);
//     const step = randomNum(1, 9);
//     const progression = [];
//     for (let k = 0; k < 10; k += 1) {
//       progression.push(num);
//       num += step;
//     }
//     const index = randomNum(1, 9);
//     progression.splice(index, 1, '..');
//     questions.push(progression.join(' '));
//     results.push(correctAnswer(progression, step));
//   }
//   return [questions, results];
// };

const correctAnswer = (expression, step) => {
  let correct = 0;
  const numOfGap = expression.indexOf('..');
  if (numOfGap === 0) {
    correct = expression[numOfGap + 1] - (step * (numOfGap + 1));
  } else {
    correct = expression[0] + (step * numOfGap);
  }
  return correct;
};

const arrOfExprissions = () => {
  let questions = 0;
  let results = 0;
  const coupleQuestionAnswer = [];
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
    questions = progression.join(' ');
    results = correctAnswer(progression, step);
    coupleQuestionAnswer.push([questions, results]);
  }
  return coupleQuestionAnswer;
};

const getRules = () => 'What number is missing in the progression?';

const startProgression = () => {
  const results = arrOfExprissions(); // присваевается значение функции!
  const rulesString = getRules(); // присваевается значение функции!
  engine(rulesString, results); // вызывется с присвоенными значениями в index.js
};

export default () => startProgression(); // дефолтная функция, вызывающаяся ИЗ bin;
// начинает игру.
