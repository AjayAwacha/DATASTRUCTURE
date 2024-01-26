function areThereDuplicates(...myArguments) {

    // using set
    // const setValues = new Set(myArguments);
    // return setValues.size !== myArguments.length

    //using Frequency Counter
    // const collection = {};
    // for (const ele of myArguments) {
    //     collection[ele] = (collection[ele] || 0) + 1;
    // }
    // for (const ele of myArguments) {
    //     if (collection[ele] > 1) {
    //         return true;
    //     }
    // }
    // return false;

    // using Multiple Pointers

    myArguments.sort();
    let start = 0;
    let next = 1;
    while(next < myArguments.length) {
        if (myArguments[start] === myArguments[next]) {
            return true;
        }
        ++start;
        ++next
    }
    return false
}
console.log(areThereDuplicates(1, 2, 3,5, 4));