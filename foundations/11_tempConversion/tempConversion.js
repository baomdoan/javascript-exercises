const convertToCelsius = function(tempF) {
  const temp = Math.round((tempF - 32) / (9/5));

  return temp;
};

const convertToFahrenheit = function(tempC) {
  const temp = Math.round(tempC * (9/5) + 32);

  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
