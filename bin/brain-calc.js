import { greetings } from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { calculator, getOperator } from '../src/math.js'

export const calc = () => {
  const name = greetings('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {

    const operator = getOperator(['+', '-', '*']);

    let number1 = Math.floor(Math.random() * 50);
    let number2 = Math.floor(Math.random() * 50);

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
    if (!checkAnswer(userAnswer, correctAnswer, name, i)) break;
  }
}
calc();
export default calc;