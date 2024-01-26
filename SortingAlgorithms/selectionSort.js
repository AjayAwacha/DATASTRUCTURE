function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let smllIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smllIndex]) {
                smllIndex = j;
            }
        }
        if (i !== smllIndex) {
            [arr[i], arr[smllIndex]] = [arr[smllIndex], arr[i]];    
        }
    }
    return arr;
}
console.log(selectionSort([5, 3, 4, 1, 2]));