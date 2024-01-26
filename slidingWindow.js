//create function which take array and number
// we need to find largest sum of sub array having number length from that array

function maxSumArraySub(arr, num) {
    let maxSum = 0;
    let tempmaxSum = 0;
    for (let i = 0; i < num; i++) {
        tempmaxSum += arr[i];
    }
    maxSum = tempmaxSum;

    for (let j = num; j < arr.length; j++) {
        tempmaxSum = tempmaxSum - arr[j - num] + arr[j];
        maxSum = Math.max(maxSum, tempmaxSum);
    }
    return maxSum;    
}
console.log(maxSumArraySub([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));