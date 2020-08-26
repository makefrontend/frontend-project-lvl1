import { getRandomValue } from '../utils.js';
import playGame from '../index.js';

const descriptionGame = 'What is the result of the expression?';
const operators = ['-', '+', '*'];
const minValue = 0;
const maxValue = 50;
const startOretators = 0;
const endOperators = 2;

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

const getGameData = () => {
  const firstValue = getRandomValue(minValue, maxValue);
  const secondValue = getRandomValue(minValue, maxValue);
  const operator = operators[getRandomValue(startOretators, endOperators)];
  const question = `${firstValue} ${operator} ${secondValue}`;
  const answer = calculate(firstValue, secondValue, operator).toString();
  return { question, answer };
};

export default () => playGame(getGameData, descriptionGame);
