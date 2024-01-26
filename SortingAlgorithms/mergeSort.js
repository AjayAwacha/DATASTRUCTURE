function mergeSort(arr) {
    console.log('arr',arr);
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    console.log('left',left);
    let right = mergeSort(arr.slice(mid));
    console.log('right',right);
    return mergeSortedArray(left, right);
}
console.log(mergeSort([10, 100, 24, 115, 78, 8, 2, 667, 8]));


function mergeSortedArray(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] < arr1[i]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}