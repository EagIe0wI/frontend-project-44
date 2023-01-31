import { greetings } from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';

export const parityCheck = () => {
  const userName = greetings('Answer "yes" if the number is even, otherwise answer "no".');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 50);
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};
parityCheck();
export default parityCheck;