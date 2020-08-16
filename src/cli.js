import readlineSync from 'readline-sync';

const startBrainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('Hello! What is your name?: ');
  console.log(`Hi, ${userName}!`);
};

export default startBrainGames;
