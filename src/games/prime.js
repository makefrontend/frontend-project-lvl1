import { getRandomValue, isPrime } from '../utils.js';
import COUNT_GAME from '../arguments.js';
import { playGame } from '../index.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  const rounds = [];
  for (let i = 0; i < COUNT_GAME; i += 1) {
    const randomValue = getRandomValue(0, 50);
    const answer = isPrime(randomValue) ? 'yes' : 'no';
    const question = randomValue.toString();
    const round = { question, answer };
    rounds.push(round);
  }
  playGame(rounds, descriptionGame);
};

export default primeGame;
