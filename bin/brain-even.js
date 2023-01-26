const parityCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  console.log('Question: 15');
  let answer = readlineSync.question('Your answer: ');
  if (answer === 'no') {
    console.log('Correct!');
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log("Let's try again, Bill!");
    process.exit(0);
  }
  
  console.log('Question: 6');
  answer = readlineSync.question('Your answer: ');
  if (answer === 'yes') {
    console.log('Correct!');
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log("Let's try again, Bill!");
    process.exit(0);
  }
  
  console.log('Question: 7');
  answer = readlineSync.question('Your answer: ');
  if (answer === 'no') {
    console.log('Correct!');
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log("Let's try again, Bill!");
    process.exit(0);
  } //не знаю, как максимально избежать коппирования
  
  console.log('Correct!');
  console.log('Congratulations, Sam!');
  
  process.exit(0);
}

export default parityCheck
