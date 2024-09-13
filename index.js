function positiveSum(arr) {
    let sum = 0;

    for (const number of arr) {
        if (number > 0) {
            sum += number;
        }
    }
    return sum;
}
