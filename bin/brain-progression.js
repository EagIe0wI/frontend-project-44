import { greetings } from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { progress, letprogress, randomNumbers } from '../src/math.js';

const progression = () => {
  const userName = greetings('What number is missing in the progression?');
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumbers(1, 11);
    const number2 = randomNumbers(1, 11);
    const prog = progress(number1, number2);
    const userAnswer = answerForm(prog, 'string');
    const correctAnswer = letprogress(prog);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

progression();
export default progression;