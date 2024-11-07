const getAge = function(person)
{

    if (!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
    }

    return person.yearOfDeath - person.yearOfBirth;

}

const findTheOldest = function(people) {
    const ages = people.toSorted((person, nextPerson) => 
        getAge(nextPerson) - getAge(person)
    );
    
    const oldest =ages[0];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
