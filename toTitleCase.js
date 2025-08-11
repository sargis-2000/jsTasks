function toTitleCase(str = '') {
    return str
        .trim()
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
}

console.log(toTitleCase('hello world'))