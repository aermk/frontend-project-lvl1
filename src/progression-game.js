import readlineSync from 'readline-sync';
import { helloGame, randomNum, getName } from './index.js';

const randomStepAndIndex = () => {
  const min = 0;
  const max = 9;
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
};

const correctAnswer = (expression) => {
  const separator = expression.indexOf('..');
  const step = expression[separator + 2] - expression[separator + 1];
  const correct = expression[separator + 1] - step;
  console.log(correct);
  return correct;
};

const userName = getName();
export default () => {
  console.log(helloGame());
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    let num = randomNum();
    const step = randomStepAndIndex();
    const progression = [];
    for (let k = 0; k < 10; k += 1) {
      progression.push(num);
      num += step;
    }
    const index = randomStepAndIndex();
    progression.splice(index, 1, '..');
    console.log(`Question: ${progression.join(' ')}`);
    const result = correctAnswer(progression);
    const answer = readlineSync.question('Your answer: ');
    if (result === Number(answer)) {
      console.log('Correct!');
    } else {
      return `Sorry, '${answer}' is wrong answer, correct answer was '${result}'. Lets try again!`;
    }
  }
  return `Congratulations ${userName}!`;
};
