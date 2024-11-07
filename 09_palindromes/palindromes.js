const palindromes = function (str) {
    
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
 
    const cleanedString = str.toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const newstr = cleanedString.split('')
    .reverse()
    .join('');


    return newstr === cleanedString;
    
};

// Do not edit below this line
module.exports = palindromes;
