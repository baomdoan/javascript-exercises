const reverseString = function(str) {
    let revstring = '';
    const length = str.length;

    for (let i = length - 1; i >= 0; i--)
    {
        revstring += str[i];
    }

    return revstring;
};

// Do not edit below this line
module.exports = reverseString;
