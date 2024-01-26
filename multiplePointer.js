//problem statment
// create function which take sorted array
// this function will find first pair which sum is zero
// return array which have that both value
// return undefined if pair not exist

// my solution

function sumZero(arr) {
    // loop arr
      //loop element after arr
        // perofrm addition if zero return
    // return undefined

    for (let i = 0; i < arr.length; i++) {
        console.log('main iteration', arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            console.log('sub iteration ', arr[j]);
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return undefined;
}
// console.log(sumZero([1, 2, 3, 4, 5, 6]));
// optimized solution for two pointer algorithm

function twoPointer(arrTest) {
    let left = arrTest[0];
    let right = arrTest[arrTest.length -1];
    while(left < right) {
        console.log(left, right);
        let sum = left + right;
        console.log('sum', sum);
        if (sum === 0) {
            return [left, right]
        }
        if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined
}
console.log(twoPointer([-2, -1, 2, 3, 4, 5, 6]));