export const randomNumbers = (min = 1, max = 30) => {
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (maximum - minimal + 1)) + minimal;
  return randomNumber;
};

export const calculator = (number1, number2, oper) => {
  let result = 0;
  if (oper === '+') result = number1 + number2;
  if (oper === '-') result = number1 - number2;
  if (oper === '*') result = number1 * number2;
  return result;
};

export const getOperator = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const operator = array[index];
  return operator;
};

export const getDivisor = (number1, number2) => {
  let x = number1;
  let y = number2;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

export const progress = (number1, number2) => {
  let result = '';
  const length = randomNumbers(5, 10);
  const desired = randomNumbers(1, length - 2);
  for (let i = 0; i < length; i += 1) {
    const formula = (number1 + (number2 * i));
    result += (i !== desired) ? `${formula} ` : '.. ';
  }
  return result;
};

export const letprogress = (str) => {
  const sort = str.split(' ');
  const indexSearch = sort.indexOf('..');
  const prevNumber = parseInt(sort[indexSearch - 1], 10);
  const nextNumber = parseInt(sort[indexSearch + 1], 10);
  const solve = (prevNumber + nextNumber) / 2;
  return `${solve}`;
};