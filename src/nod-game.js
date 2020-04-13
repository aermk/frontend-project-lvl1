import readlineSync from 'readline-sync';
import { helloGame, randomNum, getName } from './index.js';

const operationOfQuestion = (num1, num2) => {
  let result = 0;
  if (num2) {
    result = operationOfQuestion(num2, num1 % num2);
  } else {
    result = Math.abs(num1);
  }
  return result;
};


const userName = getName();
export default () => {
  console.log(helloGame());
  console.log('Find the greatest common divisor of given numbers');
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomNum();
    const num2 = randomNum();
    const expression = `Question: ${num1} ${num2}`;
    console.log(expression);
    const result = operationOfQuestion(num1, num2);
    // console.log(result);
    const answer = Number(readlineSync.question('Your answer: '));
    if (result === answer) {
      console.log('Correct!');
    } else {
      return `Sorry, '${answer}' is wrong answer, correct answer was '${result}'. Lets try again!`;
    }
  }
  return `Congratulations ${userName}!`;
};
