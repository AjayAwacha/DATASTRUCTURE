function sameFrequency(num1, num2) {
    const friquency = {};
    for (const digit of num1) {
        friquency[digit] = (friquency[digit] || 0) + 1;
    }
    for (const num of num2) {
        if (!friquency[num]) {
            return false;
        }
        --friquency[num];
        if (friquency[num] < 0) {
            return false;
        }
    }
    return true;
}
console.log(sameFrequency('182','281'));