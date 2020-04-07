import readlineSync from 'readline-sync';

export const helloGame = () => {
  console.log('Welcome to the Brain Games!');
  let hello = '';
  const name = readlineSync.question('May I have your name? ');
  hello = `Hello, ${name}!`;
  return hello;
};

export const evenGame = () => {
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  for (let i = 0; i < 3; i += 1) {
    const min = 1;
    const max = 50;
    const num = Math.floor(Math.random() * (max - min) + min);
    const question = `Question: ${num}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      return `Sorry, '${answer}' is wrong answer, correct answer was '${!answer}' lets try again`;
    }
  }
  return 'Congratulations!!!';
};
