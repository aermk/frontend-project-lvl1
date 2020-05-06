import readlineSync from 'readline-sync';

const sendMessageToUser = (message) => {
  console.log(message);
};

const getAnswerFromUser = (question) => readlineSync.question(question);
const welcomeMessage = () => {
  sendMessageToUser('Welcome to the Brain Games!');
};

const getName = () => getAnswerFromUser('May I have your name? ');

const helloGame = (userName) => {
  sendMessageToUser(`Hello, ${userName}!`);
};

const showGameRules = (rules) => sendMessageToUser(rules);

// const gameRounds = 3;

export default (rules, arrOfTasks) => { // фун-я,вызыв-ся ИЗ src -engine;
  console.log(arrOfTasks);
  welcomeMessage();
  const userName = getName();
  helloGame(userName);
  showGameRules(rules);
  for (let i = 0; i < arrOfTasks.length; i += 1) {
    sendMessageToUser(`Question: ${arrOfTasks[i][0]}`);
    const answerOfUser = getAnswerFromUser('Answer: ');
    // console.log(answerOfUser);
    // console.log(arrOfRess[i]);
    if (answerOfUser === String(arrOfTasks[i][1])) {
      sendMessageToUser('Correct!');
    } else {
      return sendMessageToUser(`Sorry, '${answerOfUser}' is wrong answer, correct answer was '${arrOfTasks[i][1]}'. Lets try again!`);
    }
  }
  return sendMessageToUser(`Congratulations, ${userName}!`);
};
