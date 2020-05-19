import randomNum from '../utilities.js';
import { engine, roundsCount } from '../index.js';

const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const startOfProgression = randomNum(1, 50);
    const stepOfProgression = randomNum(1, 9);
    const lengthOfProgression = 10;
    const progression = [];
    for (let k = 0; k < lengthOfProgression; k += 1) {
      progression.push(startOfProgression + stepOfProgression * k);
    }
    const lastProgressionIndex = lengthOfProgression - 1;
    const index = randomNum(0, lastProgressionIndex);
    const missingNum = progression[index];
    progression.splice(index, 1, '..');
    const question = progression.join(' ');
    gameData.push([question, missingNum]);
  }
  return gameData;
};

const startProgressionGame = () => {
  const gameData = getGameData();
  const rule = 'What number is missing in the progression?';
  engine(rule, gameData);
};

export default () => startProgressionGame();
