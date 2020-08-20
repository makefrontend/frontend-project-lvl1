import { getRandomValue } from '../src/utils.js';
import playGame from '../src/index.js';

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
  const firstValue = getRandomValue(1, 200);
  const secondValue = getRandomValue(1, 200);
  const operator = operators[Math.floor((Math.random() * operators.length))];
  const calculateValue = calculate(firstValue, secondValue, operator);
  const question = `${firstValue} ${operator} ${secondValue}`;
  const answer = calculateValue.toString();

  return [question, answer];
};

export default () => playGame(calculateGame, descriptionGame);
