// write function which accept sorted array
// we need to find unique values from that array


function countUniqueValues(arr) {
    let counter = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[counter] !== arr[i]) {
            counter++;
            arr[counter] = arr[i];
        }
    }
    return counter + 1;
}
console.log(countUniqueValues([0, 0, 1, 1, 1, 1, 1, 2]));