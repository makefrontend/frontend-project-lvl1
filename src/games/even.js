import { isEven, getRandomValue } from '../utils.js';
import COUNT_GAME from '../arguments.js';
import { playGame } from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValue = 0;
const maxValue = 50;

const startGameEven = () => {
  const rounds = [];
  for (let i = 0; i < COUNT_GAME; i += 1) {
    const randomValue = getRandomValue(minValue, maxValue);
    const question = `${randomValue}`;
    const answer = isEven(randomValue) ? 'yes' : 'no';
    const round = { question, answer };
    rounds.push(round);
  }
  playGame(rounds, descriptionGame);
};

export default startGameEven;
