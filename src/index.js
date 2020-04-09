import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

let userName = '';

export const helloGame = () => {
  console.log('Welcome to the Brain Games!');
  let hello = '';
  userName = getName();
  hello = `Hello, ${userName}!`;
  return hello;
};


const numberCheck = (num) => {
  let result = '';
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

const randomNum = () => {
  const min = 1;
  const max = 50;
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
};

export const evenGame = () => {
  console.log(helloGame());
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum();
    const question = `Question: ${num}`;
    console.log(question);
    const result = numberCheck(num);
    const answer = readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    } else {
      return `Sorry, '${answer}' is wrong answer, correct answer was '${result}'. Lets try again!`;
    }
  }
  return `Congratulations ${userName}!`;
};
