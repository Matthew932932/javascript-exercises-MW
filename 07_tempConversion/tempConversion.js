const convertToCelsius = function(num1) {

  num1 = Math.round(((num1-32)*(5/9))*10) / 10;
  return num1;

};

const convertToFahrenheit = function(num2) {
  
  num2 = Math.round((num2 * 9/5 + 32)*10)/10; 
  return num2;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
