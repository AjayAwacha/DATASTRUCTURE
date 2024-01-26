//problem statment
// compare two array. return true if first array elemnt square present in secound
//example [1, 3, 2] [1,9] // false
//        [1, 3, 2, 2] [1, 9, 9, 4]  // false friquency don't match
//        [1, 3, 2] [1, 9, 4] // true

// general solution
function compareArray(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        const indexofElement = arr2.indexOf(arr1[i] * arr1[i]);
        if (indexofElement === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(indexofElement, 1);
    }
    return true;
}
// console.log(compareArray([1, 3, 3, 2], [1, 4, 4, 9]));


// we can optimize above function using friquency counter pattern
function friquencyCounter(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    let squareCounters = {};
    for (let i = 0; i < arr2.length; i++) {
        squareCounters[arr2[i]] = (squareCounters[arr2[i]] || 0) + 1;
    }
    console.log(squareCounters);
    for (let j = 0; j < arr1.length; j++) {
        const squareCounter = arr1[j] * arr1[j];
        console.log('check if : '+ squareCounter + 'present in squareCounters', squareCounters[squareCounter]);
        if (!squareCounters[squareCounter]) {
            return false;
        }
        --squareCounters[squareCounter];
        console.log('After remove ',squareCounters[squareCounter]);
        if (squareCounters[squareCounter] < 0) {
            return false;
        }
    }
    return true;
}
console.log(friquencyCounter([1, 3], [1, 4, 9]));
