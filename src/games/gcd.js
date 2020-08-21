import { getRandomValue } from '../utils.js';
import playGame from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number1 % number2 === 0) {
    return number2;
  }
  return getGcd(number2, number1 % number2);
};

const gameData = () => {
  const firstValue = getRandomValue(0, 50);
  const secondValue = getRandomValue(0, 50);
  const question = `${firstValue} ${secondValue}`;
  const answer = String(getGcd(firstValue, secondValue));
  return [question, answer];
};

const startGame = () => playGame(gameData, descriptionGame);

export default startGame;
