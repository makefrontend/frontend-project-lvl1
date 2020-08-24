import { getRandomValue } from '../utils.js';
import COUNT_GAME from '../arguments.js';
import { playGame } from '../index.js';

const descriptionGame = 'What number is missing in the progression?';
const progressionLength = 10;

const progressionGame = () => {
  const rounds = [];
  const progressionList = [];
  for (let i = 0; i < COUNT_GAME; i += 1) {
    const firstValue = getRandomValue(0, 50);
    const secondValue = getRandomValue(0, 50);
    for (let k = 0; k < progressionLength; k += 1) {
      const number = firstValue + secondValue * k;
      progressionList.push(number);
    }
    const replaceProgression = getRandomValue(0, progressionList.length - 1);
    const answer = progressionList[replaceProgression].toString();
    progressionList[replaceProgression] = '..';
    const question = progressionList.join(' ');
    const round = { question, answer };
    rounds.push(round);
    progressionList.length = 0; // Очищаем массив для новой итерации
  }
  playGame(rounds, descriptionGame);
};

export default progressionGame;
