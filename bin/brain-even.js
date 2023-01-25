const parityCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  console.log('Question: 15');
  const answer1 = readlineSync.question('Your answer: ');
  if (answer1 === 'no') {
    console.log('Correct!');
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log("Let's try again, Bill!");
    process.exit(0);
  }
  
  console.log('Question: 6');
  const answer1 = readlineSync.question('Your answer: ');
  if (answer1 === 'yes') {
    console.log('Correct!');
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log("Let's try again, Bill!");
    process.exit(0);
  }
  
  console.log('Question: 7');
  const answer1 = readlineSync.question('Your answer: ');
  if (answer1 === 'no') {
    console.log('Correct!');
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log("Let's try again, Bill!");
    process.exit(0);
  }
  
  console.log('Correct!');
  console.log('Congratulations, Sam!');
  
  process.exit(0);
}
