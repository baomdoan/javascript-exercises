const palindromes = function (string) {
    let reverseString = "";

    for (let i = string.length - 1; i >= 0; i--)
    {
        reverseString += string[i];
    }

    return (reverseString === string);
};

// Do not edit below this line
module.exports = palindromes;
