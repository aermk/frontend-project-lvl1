import readlineSync from 'readline-sync';

const showMessage = (message) => console.log(message);

export const roundsCount = 3;

export const engine = (rule, tasksAndSolutions) => {
  console.log(tasksAndSolutions); // проверка
  showMessage('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  showMessage(`Hello, ${userName}!`);
  showMessage(rule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [task, solution] = tasksAndSolutions[i];
    showMessage(`Question: ${task}`);
    const answerOfUser = readlineSync.question('Answer: ');
    if (answerOfUser === String(solution)) {
      showMessage('Correct!');
    } else {
      showMessage(`Sorry, '${answerOfUser}' is wrong answer, correct answer was '${solution}'. Lets try again, ${userName}!`);
      return;
    }
  }
  showMessage(`Congratulations, ${userName}!`);
};
