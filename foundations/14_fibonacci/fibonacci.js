const fibonacci = function(fibboNum) {
    let fibboResult = 0;
    if (fibboNum === 0)
    {
        fibboResult = 0;
    }
    else if (fibboNum === 1)
    {
        fibboResult = 1;
    }
    else
    {
        let num1 = 0;
        let num2 = 1;

        for (let i = 2; i <= fibboNum; i++)
        {
            fibboResult = num1 + num2;
            num1 = num2;
            num2 = fibboResult;
        }
    }

    return fibboResult;
};

// Do not edit below this line
module.exports = fibonacci;
