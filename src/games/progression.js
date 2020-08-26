import { getRandomValue } from '../utils.js';
import playGame from '../index.js';

const descriptionGame = 'What number is missing in the progression?';
const progressionLength = 10;
const minValue = 0;
const maxValue = 50;

const getGameData = () => {
  const progressionList = [];
  const firstValue = getRandomValue(minValue, maxValue);
  const secondValue = getRandomValue(minValue, maxValue);
  for (let k = 0; k < progressionLength; k += 1) {
    const number = firstValue + secondValue * k;
    progressionList.push(number);
  }
  const replaceProgression = getRandomValue(0, progressionList.length - 1);
  const answer = progressionList[replaceProgression].toString();
  progressionList[replaceProgression] = '..';
  const question = progressionList.join(' ');
  return { question, answer };
};

export default () => playGame(getGameData, descriptionGame);
