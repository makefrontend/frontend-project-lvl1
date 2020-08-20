import readlineSync from 'readline-sync';
// import { isEven, getRandomValue } from '../src/utils.js';
import { STEP_GAME, COUNT_GAME } from './arguments.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);

const playGame = (getGameData, getDescriptionGame) => {
  console.log(getDescriptionGame);
  const [question, answer] = getGameData();
  let count = STEP_GAME;
  while (count <= COUNT_GAME) {
    console.log(`${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again ${userName}!`);
      break;
    }
    console.log('Correct!');
    count += 1;
  }
  console.log(`Congratulations, ${userName}`);
};

export default playGame;
