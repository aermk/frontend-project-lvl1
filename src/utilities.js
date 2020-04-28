import readlineSync from 'readline-sync';

export default (min, max) => {
  // const min = 1;
  // const max = 50;
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
};

export const sendMessageToUser = (message) => {
  console.log(message);
};

export const getAnswerFromUser = (question) => readlineSync.question(question);
