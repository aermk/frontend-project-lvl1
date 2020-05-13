import randomNum from '../utilities.js';
import { engine, roundOfCount } from '../index.js';

const getMissingNum = (expression, step) => {
  let missingNum;
  const numOfGap = expression.indexOf('..');
  if (numOfGap === 0) {
    missingNum = expression[numOfGap + 1] - (step * (numOfGap + 1));
  } else {
    missingNum = expression[0] + (step * numOfGap);
  }
  return missingNum;
};

const getArrOfQuestionsAndResults = () => {
  const arrOfQuestionsAndResults = [];
  for (let i = 0; i < roundOfCount; i += 1) {
    let startOfProgression = randomNum(1, 50);
    const stepOfProgression = randomNum(1, 9);
    const lengthOfProgression = 10;
    const progression = [];
    for (let k = 0; k < lengthOfProgression; k += 1) {
      progression.push(startOfProgression);
      startOfProgression += stepOfProgression;
    }
    const index = randomNum(1, 9);
    progression.splice(index, 1, '..');
    const question = progression.join(' ');
    const result = getMissingNum(progression, stepOfProgression);
    arrOfQuestionsAndResults.push([question, result]);
  }
  return arrOfQuestionsAndResults;
};

const startProgressionGame = () => {
  const arrOfQuestionsAndResults = getArrOfQuestionsAndResults();
  const rule = 'What number is missing in the progression?';
  engine(rule, arrOfQuestionsAndResults);
};

export default () => startProgressionGame();
