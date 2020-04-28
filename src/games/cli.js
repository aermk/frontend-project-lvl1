import { sendMessageToUser, getAnswerFromUser } from '../utilities.js';

export default () => {
  sendMessageToUser('Welcome to the Brain Games!');
  const userName = getAnswerFromUser('May I have your name? ');
  sendMessageToUser(`Hello, ${userName}`);
};
