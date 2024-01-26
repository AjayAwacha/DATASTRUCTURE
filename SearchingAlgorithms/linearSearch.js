function linearSearch(arr, val) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === val) return index;
    }
    return -1;
}
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 8));