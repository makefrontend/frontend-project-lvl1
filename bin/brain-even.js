import readlineSync from 'readline-sync';

const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');
const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let step = 1;
const count = 3;

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (step <= count) {
    const randomValue = getRandomValue(0, 100);
    console.log(randomValue);
    const getAnswerQuestion = readlineSync.question('Your answer: ');
    if (getAnswerQuestion === isEven(randomValue)) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      break;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

playGame();
