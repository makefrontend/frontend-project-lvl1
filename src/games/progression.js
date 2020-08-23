import { getRandomValue } from '../utils.js';
import { playGame } from '../index.js';

const descriptionGame = 'What number is missing in the progression?';
const progressionLength = 10;

const progressionGame = () => {
  const rounds = [];
  const firstValue = getRandomValue(0, 50);
  const secondValue = getRandomValue(0, 50);
  for (let i = 0; i < progressionLength; i += 1) {

  }
  playGame(rounds, descriptionGame);
};

export default progressionGame;
