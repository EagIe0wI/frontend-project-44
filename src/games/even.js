#!/usr/bin/env node

import greetings from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { randomNumbers } from '../math.js';

const even = () => {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = randomNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default even;