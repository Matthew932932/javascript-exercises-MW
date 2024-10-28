const removeFromArray = function(mwArr, ...args) {
    let newArr = [];

    mwArr.forEach(item => {
        if (!args.includes(item)) {
            newArr.push(item);
          }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
