function findAverage(numbers = []) {
    if (numbers.length > 0) {
        const sum = numbers.reduce((acc, val) => {
            return acc + val
        }, 0)

        return sum / numbers.length
    }
}

console.log(findAverage([10, 20, 30, 40, 50]))