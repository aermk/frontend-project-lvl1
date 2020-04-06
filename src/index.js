import readlineSync from 'readline-sync';

export default () => {
  let hello = '';
  const name = readlineSync.question('May I have your name? ');
  hello = `Hello, ${name}!`;
  return hello;
};.
