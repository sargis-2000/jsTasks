function sumArray(numbers = []) {
    return numbers.reduce((acc, val) => {
        return acc + val
    }, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]))