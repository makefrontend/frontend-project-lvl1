import readlineSync from 'readline-sync';
import { isEven, getRandomValue } from '../src/utils.js';
import { STEP_GAME, COUNT_GAME } from '../src/constants.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);

const playGame = (getGameData, getDescriptionGame) => {
  console.log(getDescriptionGame);
  while (STEP_GAME <= COUNT_GAME) {
    console.log(`${questionGame}`);
    

  };
};

export default playGame;
