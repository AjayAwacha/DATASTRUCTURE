//problem statment
// write a function which take two staring as input
// return true if both strings are anagram, return false if they are not

function checkAnagram(str1, str2) {
    //create friquency counter for str2
    // loop for str1
      //check for given string counter is present not then return false
      //remove by one
      //check counter value not goes in misus / return false
    //return true

    if (!str1 && !str2) {
        return true;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    const counters = {};
    for (const counter of str2) {
        counters[counter] = (counters[counter] || 0) + 1;
    }
    for (const chr of str1) {
        if (!counters[chr]) {
            return false;
        }
        --counters[chr];
        if (counters[chr] < 0) {
            return false;
        }
    }
    return true;
}

console.log(checkAnagram('qwerty', 'qtywer'));