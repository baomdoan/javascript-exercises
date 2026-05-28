const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num2 - num1;
};

const sum = function(numArray) {
	let result = numArray.reduce((total, currentValue) => 
  {
    return total + currentValue;
  }, 0)
};

const multiply = function(numArray) {
  let result = numArray.reduce((total, currentValue) =>
    {
      return result * currentValue
    }, 1)
};

const power = function(baseNum, expNum) {
	let total = 1;

  for (let i = 0; i < expNum; i++)
  {
    total *= baseNum;
  }

  return total;
};

const factorial = function(factorialNum) {
	let result = 1;

  if (factorialNum === 0 || factorialNum === 1)
  {
    result = 1;
  }
  else
  {
    for (let i = 1; i <= factorialNum; i++)
      result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
