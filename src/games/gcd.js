import { getRandomValue } from '../utils.js';
import playGame from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const minValue = 0;
const maxValue = 50;

const getGcd = (number1, number2) => {
  if (number1 % number2 === 0) {
    return number2;
  }
  return getGcd(number2, number1 % number2);
};

const getGameData = () => {
  const firstValue = getRandomValue(minValue, maxValue);
  const secondValue = getRandomValue(minValue, maxValue);
  const question = `${firstValue} ${secondValue}`;
  const answer = String(getGcd(firstValue, secondValue));
  return { question, answer };
};

export default () => playGame(getGameData, descriptionGame);
