const repeatString = function(Mword, Mtimes) {
    if (Mtimes < 0) return "ERROR";
    let mstr = "";
    
    for(let i = 0; i < Mtimes; i++)
    {
        mstr += Mword;
    }
    return mstr;
};

// Do not edit below this line
module.exports = repeatString;
