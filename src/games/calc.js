import { getRandomValue } from '../utils.js';
import playGame from '../index.js';

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
  const firstValue = getRandomValue(0, 50);
  const secondValue = getRandomValue(0, 50);
  const operator = operators[Math.floor((Math.random() * operators.length))];
  const calculateValue = calculate(firstValue, secondValue, operator);
  const question = `${firstValue} ${operator} ${secondValue}`;
  const answer = calculateValue.toString();
  return [question, answer];
};

const startCalculateGame = () => playGame(calculateGame, descriptionGame);

export default startCalculateGame;
