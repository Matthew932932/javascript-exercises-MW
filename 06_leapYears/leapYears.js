const leapYears = function(num1) {

    if((num1 % 400 === 0 || !(num1 % 100 === 0)) && num1 % 4 === 0 )
    {
        return true;
    } 
    return false;

};

// Do not edit below this line
module.exports = leapYears;
