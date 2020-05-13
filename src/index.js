import readlineSync from 'readline-sync';

const showMessage = (message) => console.log(message);

export const roundOfCount = 3;

export const engine = (rule, arrOfTasks) => {
  console.log(arrOfTasks); // проверка
  showMessage('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  showMessage(`Hello, ${userName}!`);
  showMessage(rule);
  for (let taskAndSolution = 0; taskAndSolution < roundOfCount; taskAndSolution += 1) {
    const [task, solution] = arrOfTasks[taskAndSolution];
    showMessage(`Question: ${task}`);
    const answerOfUser = readlineSync.question('Answer: ');
    if (answerOfUser === String(solution)) {
      showMessage('Correct!');
    } else {
      return showMessage(`Sorry, '${answerOfUser}' is wrong answer, correct answer was '${solution}'. Lets try again!`);
    }
  }
  return showMessage(`Congratulations, ${userName}!`);
};
