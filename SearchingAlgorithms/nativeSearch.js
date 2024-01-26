function nativeSearch(longStr, pattern) {
    // using two for loop
    let counter = 0;
    for (let i = 0; i < longStr.length - pattern.length + 1; i++) {
        let match = 0;
        for(let j = 0; j < pattern.length; j++) {
            if (longStr[i + j] === pattern[j]) {
                ++match;
            } else {
                break;
            }
            if (match === pattern.length) {
                ++counter;
                break;
            }
        }
    }
    return counter;
}
console.log(nativeSearch('wowomgzomg', 'omg'));