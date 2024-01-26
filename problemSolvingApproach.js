//problem statment
//count each charecter in string

function countCahr(str) {
    let response = {};
    // for (let i = 0; i < str.length; i++) {
    //     const char = str[i];
    //     if (response[char]) {
    //         response[char] = response[char] + 1;
    //     } else {
    //         response[char] = 1;
    //     }
    // }

    // we can optimise
    for (const char of str) {
        response[char] = ++response[char] || 1;
    }
    return response;
}

console.log(countCahr('dgdgdfg'));