import readlineSync from 'readline-sync';
import { isEven, getRandomValue } from '../src/utils.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!`);

let step = 1;
const count = 3;
const playGame = (getGameType, getDescriptionGame) => {
  console.log(getDescriptionGame);
  while (step <= count) {
    console.log(`${questionGame}`);
    

  };
};
