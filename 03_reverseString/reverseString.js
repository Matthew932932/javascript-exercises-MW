const reverseString = function(Mstr) {

    let splStr = "";
    let revArr = "";
    let joinArr = "";

    splStr = Mstr.split("");
    revArr = splStr.reverse();
    joinArr = revArr.join("");

    return joinArr;

};

// Do not edit below this line
module.exports = reverseString;
