import readlineSync from 'readline-sync';
import COUNT_GAME from './arguments.js';
// import { isEven, getRandomValue } from '../src/utils.js';

const playGame = (rounds, getDescriptionGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log(getDescriptionGame);
  for (let i = 0; i < COUNT_GAME; i += 1) {
    const { question, answer } = rounds[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
};

export { COUNT_GAME, playGame };
