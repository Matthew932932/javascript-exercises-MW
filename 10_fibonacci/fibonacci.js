const fibonacci = function(numof) {

    let count
    if (typeof numof !== 'number') {
        count = parseInt(numof);
    } else {
        count = numof;
    }

    
    if(numof < 0)
    {return "OOPS";}
    else if(count === 0)
    {return 0;}
    
    firstPrev = 1;
    secondPrev = 0;
    
    for (let i = 2; i <= numof; i++) {
        let curr = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = curr;
    }

    return firstPrev;

};

// Do not edit below this line
module.exports = fibonacci;
