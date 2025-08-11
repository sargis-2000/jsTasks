function findLargest(numbers = []) {
    return numbers.reduce((max, current) => {
        return current > max ? current : max
    }, numbers[0])
}

console.log(findLargest([1, 3, 9, 7, 8]))