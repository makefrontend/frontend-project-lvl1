import { getRandomValue } from '../utils.js';
import COUNT_GAME from '../arguments.js';
import { playGame } from '../index.js';

const descriptionGame = 'What is the result of the expression?';
const operators = ['-', '+', '*'];

const calculate = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '-':
      return firstValue - secondValue;
    case '+':
      return firstValue + secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      return null;
  }
};

const calculateGame = () => {
  const rounds = [];
  for (let i = 0; i < COUNT_GAME; i += 1) {
    const firstValue = getRandomValue(0, 50);
    const secondValue = getRandomValue(0, 50);
    const operator = operators[getRandomValue(0, 2)];
    const question = `${firstValue} ${operator} ${secondValue}`;
    const answer = calculate(firstValue, secondValue, operator).toString();
    const round = { question, answer };
    rounds.push(round);
  }
  playGame(rounds, descriptionGame);
};

export default calculateGame;
