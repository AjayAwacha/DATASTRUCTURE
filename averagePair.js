function averagePair(arr, targetAvg) {
    arr.sort();
    let start = 0;
    let next = 1;

    while(next < arr.length) {
        if ((arr[start] + arr[next]) / 2 === targetAvg) {
            return true;
        }
        ++start;
        ++next;
    }
    return false;
}
console.log(averagePair([1,2,3],2.6));