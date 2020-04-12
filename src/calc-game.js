import readlineSync from 'readline-sync';
import { helloGame, randomNum, getName } from './index.js';

const randomSign = () => {
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];
  return sign;
};

const operationOfQuestion = (num1, num2, sign) => {
  let result = 0;
  if (sign === '+') {
    result = num1 + num2;
  } else if (sign === '-') {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }
  return result;
};

const userName = getName();
export default () => {
  console.log(helloGame());
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = randomNum();
    const num2 = randomNum();
    const sign = randomSign();
    const expression = `Question: ${num1} ${sign} ${num2}`;
    console.log(expression);
    const result = operationOfQuestion(num1, num2, sign);
    // console.log(result);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === result) {
      console.log('Correct!');
    } else {
      return `Sorry, '${answer}' is wrong answer, correct answer was '${result}'. Lets try again!`;
    }
  }
  return `Congratulations ${userName}!`;
};
