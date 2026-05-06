const removeFromArray = function(array, num) {
    let newArray = [];
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++)
    {
        if (array[i] != num)
        {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
