import getRandomValue from '../utils.js';
import playGame from '../index.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minValue = 0;
const maxValue = 50;

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const randomValue = getRandomValue(minValue, maxValue);
  const answer = isPrime(randomValue) ? 'yes' : 'no';
  const question = randomValue.toString();
  return { question, answer };
};

export default () => playGame(getGameData, descriptionGame);
