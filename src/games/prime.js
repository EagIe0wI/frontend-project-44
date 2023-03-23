import { greetings } from "../cli.js";
import { answerForm, checkAnswer } from '../index.js';
import { randomNumbers, isPrime } from '../math.js'

const prime = () => {
  const userName = greetings('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumbers(1, 150);
    const userAnswer = answerForm(number, 'string');
    const correctAnswer = isPrime(number);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
}

export default prime;