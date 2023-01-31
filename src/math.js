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

export const getDivisor = (x, y) => {
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};