import { greetings } from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { getDivisor, randomNumbers } from '../math.js';

const gcd = () => {
  const userName = greetings('Find the greatest common divisor of given numbers.');
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumbers();
    const number2 = randomNumbers();
    const ex = `${number1} ${number2}`;
    const userAnswer = answerForm(ex);
    const correctAnswer = getDivisor(number1, number2);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default gcd;
