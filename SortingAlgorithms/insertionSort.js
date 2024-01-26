function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentEle = arr[i];
        if (currentEle < arr[i -1]) {
            for(let j = i -1; j >= 0; j--) {
                if (currentEle < arr[j]) {
                    let temp = currentEle;
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}
console.log(insertionSort([2, 1, 9, 7, 6, 4]));