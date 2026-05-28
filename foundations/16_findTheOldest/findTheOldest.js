const findTheOldest = function(array) {

    /*
    object has name, yearOfBirth (yob) some has no yearOfDeath (yod)
    to get the oldest => yod - yob = age
    if no yod of the current or before => compare yob with the item before it
    */
    let oldest = array[0];
    const currentYear = new Date().getFullYear();

    const age = function(person)
    {
        return (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
    }

    for (let i = 1; i < array.length; i++)
    {
        if (age(array[i]) > age(oldest))
        {
            oldest = array[i]
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
