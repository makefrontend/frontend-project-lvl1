import { getRandomValue } from '../utils.js';
import playGame from '../index.js';

const descriptionGame = 'What number is missing in the progression?';
const progressionLength = 10;
const minValue = 0;
const maxValue = 50;

const getGameData = () => {
  const progression = [];
  const firstValue = getRandomValue(minValue, maxValue);
  const secondValue = getRandomValue(minValue, maxValue);
  for (let k = 0; k < progressionLength; k += 1) {
    const number = firstValue + secondValue * k;
    progression.push(number);
  }
  const replaceProgression = getRandomValue(0, progression.length - 1);
  const answer = progression[replaceProgression].toString();
  progression[replaceProgression] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

export default () => playGame(getGameData, descriptionGame);
