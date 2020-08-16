import readlineSync from 'readline-sync';

export const getUserName = () => {
    const userName = readlineSync.question('Hello! What is your name?: ');
    console.log(`Hello, ${userName}!`)
}