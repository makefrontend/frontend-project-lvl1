import { getRandomValue } from '../utils.js';
import COUNT_GAME from '../arguments.js';
import { playGame } from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';
const minValue = 0;
const maxValue = 50;

const getGcd = (number1, number2) => {
  if (number1 % number2 === 0) {
    return number2;
  }
  return getGcd(number2, number1 % number2);
};

const gcdGame = () => {
  const rounds = [];
  for (let i = 0; i < COUNT_GAME; i += 1) {
    const firstValue = getRandomValue(minValue, maxValue);
    const secondValue = getRandomValue(minValue, maxValue);
    const question = `${firstValue} ${secondValue}`;
    const answer = String(getGcd(firstValue, secondValue));
    const round = { question, answer };
    rounds.push(round);
  }
  playGame(rounds, descriptionGame);
};

export default gcdGame;
