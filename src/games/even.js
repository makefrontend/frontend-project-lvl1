import { isEven, getRandomValue } from '../utils.js';
import playGame from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValue = 0;
const maxValue = 50;

const getGameData = () => {
  const randomValue = getRandomValue(minValue, maxValue);
  const question = `${randomValue}`;
  const answer = isEven(randomValue) ? 'yes' : 'no';
  return { question, answer };
};

export default () => playGame(getGameData, descriptionGame);
