function findLongestword(text = '') {
    return text
        .split(' ')
        .reduce((longest, current) => {
            return current.length > longest.length ? current : longest
        }, '')
}

console.log(findLongestword('JavaScript is awesome'))