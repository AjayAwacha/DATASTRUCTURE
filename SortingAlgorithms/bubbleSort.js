function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap using new syntax
                // we can also swap using temp variable
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr
}
console.log(bubbleSort([5, 3, 4, 1, 2]));