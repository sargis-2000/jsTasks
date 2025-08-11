function mostFrequentItem(array = []) {
    const counts = {}
    let maxCount = 0
    let mostFrequentItem = null

    for (const item of array) {
        counts[item] = (counts[item] || 0) + 1

        if (counts[item] > maxCount) {
            maxCount = counts[item]
            mostFrequentItem = item
        }
    }

    return mostFrequentItem
}

console.log(mostFrequentItem([10, 20, 10, 30, 20, 10]))