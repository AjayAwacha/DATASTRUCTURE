function pivot(arr, start = 0, end = arr.length -1) {
    debugger
    let swapIndex = start;
    let pivoteValue = arr[start];
    for (let i = 1; i <= end; i++) {
        if (arr[i] < pivoteValue) {
            ++swapIndex;
            //swap two number
            let temp = arr[swapIndex];
            arr[swapIndex] = arr[i];
            arr[i] = temp;
            // [arr[swapIndex], arr[i]] = [arr[swapIndex], arr[i]];
        }
    }
    [arr[swapIndex], arr[0]] = [arr[0], arr[swapIndex]];
    return arr;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
} 
             
quickSort([100,-3,2,4,6,9,1,2,5,3,23])
  
  
  
  
  // [4,6,9,1,2,5,3]
  // [3,2,1,4,6,9,5]
  //        4
  //  3,2,1    6,9,5
  //      3      6
  //  2,1      5  9
  //    2
  //  1
  
  
  
  
  
console.log(pivot([4,8,2,1,5,7,6,3]));