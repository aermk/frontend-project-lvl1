import readlineSync from 'readline-sync';
import { helloGame, randomNum, getName } from './index.js';

const correctAnswer = (num) => {
  let correct = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num <= 1 || num % i === 0) {
      correct = 'no';
    }
  }
  return correct;
};

const userName = getName();
export default () => {
  console.log(helloGame());
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum();
    const expression = `Question: ${num}`;
    console.log(expression);
    const result = correctAnswer(num);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      return `Sorry, '${answer}' is wrong answer, correct answer was '${result}'. Lets try again!`;
    }
  }
  return `Congratulations ${userName}!`;
};
