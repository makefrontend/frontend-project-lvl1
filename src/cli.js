import readlineSync from 'readline-sync';

export const runGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('Hello! What is your name?: ');
  console.log(`Hi, ${userName}!`);
};

export const getAnswerQuestion = () => readlineSync.question('Your answer: ');
