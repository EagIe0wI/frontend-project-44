const gcd = () => {
    console.log('Find the greatest common divisor of given numbers.');

    let number1 = Math.random(100);
    let number2 = Math.random(100);

    console.log('Question: ${number1} ${number2}');
    let answer = readlineSync.question('Your answer: ');
    if (answer === '') {
        console.log('Correct!');
    } else {
        console.log("'${answer}' is wrong answer ;(. Correct answer was '${''}'.");
        console.log("Let's try again, ${name}!");
        process.exit(0);
    }
}

export default gcd