import { greetings } from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { calculator, getOperator, randomNumbers } from '../math.js';

const calc = () => {
  const userName = greetings();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const operator = getOperator(['+', '-', '*']);

    const number1 = randomNumbers();
    const number2 = randomNumbers();

    const example = `${number1} ${operator} ${number2}`;
    const userAnswer = answerForm(example);
    let correctAnswer = 0;

    switch (operator) {
      case '+':
        correctAnswer = calculator(number1, number2, '+');
        break;

      case '-':
        correctAnswer = calculator(number1, number2, '-');
        break;

      case '*':
        correctAnswer = calculator(number1, number2, '*');
        break;

      default:
    }
    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default calc;
