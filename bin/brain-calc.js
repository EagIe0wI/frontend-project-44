const calculator = () => {
  console.log('What is the result of the expression?');
  
  let number1 = Math.random(100);
  let number2 = Math.random(100);
  
  console.log('Question: ${number1} + ${number2}'); //я не знаю, как сделать рандомный знак
  let answer = readlineSync.question('Your answer: ');
  if (answer === (number1 + number2)) {
    console.log('Correct!');
  } else {
    console.log("'${answer}' is wrong answer ;(. Correct answer was '${(number1 + number2)}'.");
    console.log("Let's try again, ${name}!");
    process.exit(0);
  }
  
  console.log('Question: ${number1} + ${number2}'); //я не знаю, как сделать рандомный знак
  answer = readlineSync.question('Your answer: ');
  if (answer === (number1 + number2)) {
    console.log('Correct!');
  } else {
    console.log("'${answer}' is wrong answer ;(. Correct answer was '${(number1 + number2)}'.");
    console.log("Let's try again, ${name}!");
    process.exit(0);
  }
  
  console.log('Question: ${number1} + ${number2}'); //я не знаю, как сделать рандомный знак
  answer = readlineSync.question('Your answer: ');
  if (answer === (number1 + number2)) {
    console.log('Correct!');
  } else {
    console.log("'${answer}' is wrong answer ;(. Correct answer was '${(number1 + number2)}'.");
    console.log("Let's try again, ${name}!");
    process.exit(0);
  }
  
  console.log('Correct!');
  console.log('Congratulations, Sam!');
  
  process.exit(0);
}

export default calculator
