#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { isEven, getRandomValue } from '../src/utils.js';
import COUNT_GAME from '../src/arguments.js';

let step = 1;
const minValue = 0;
const maxValue = 50;

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (step <= COUNT_GAME) {
    const randomValue = getRandomValue(minValue, maxValue);
    console.log(`Question: ${randomValue}`);
    const getAnswerQuestion = readlineSync.question('Your answer: ');
    if (getAnswerQuestion === isEven(randomValue)) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      return;
    }
    console.log('Correct!');
    step += 1;
  }
  console.log(`Congratulations, ${userName}`);
};

playGame();
