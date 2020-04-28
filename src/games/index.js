import { sendMessageToUser, getAnswerFromUser } from '../utilities.js';

const welcomeMessage = () => {
  sendMessageToUser('Welcome to the Brain Games!');
};

const getName = () => getAnswerFromUser('May I have your name? ');

const helloGame = (userName) => {
  sendMessageToUser(`Hello, ${userName}!`);
};

const showGameRules = (rules) => sendMessageToUser(rules);

const gameRounds = 3;

export default (rules, arrOfExpressions, arrOfRess) => { // фун-я,вызыв-ся ИЗ src -engine;
  console.log(arrOfExpressions);
  console.log(arrOfRess);
  welcomeMessage();
  const userName = getName();
  helloGame(userName);
  showGameRules(rules);
  for (let i = 0; i < gameRounds; i += 1) {
    sendMessageToUser(`Question: ${arrOfExpressions[i]}`);
    const answerOfUser = getAnswerFromUser('Answer: ');
    // console.log(answerOfUser);
    // console.log(arrOfRess[i]);
    if (answerOfUser === String(arrOfRess[i])) {
      sendMessageToUser('Correct!');
    } else {
      return sendMessageToUser(`Sorry, '${answerOfUser}' is wrong answer, correct answer was '${arrOfRess[i]}'. Lets try again!`);
    }
  }
  return sendMessageToUser(`Congratulations, ${userName}!`);
};
