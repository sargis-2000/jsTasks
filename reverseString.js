function reverseString(str = '') {
    return str
        .toLowerCase()
        .trim()
        .split('')
        .reverse()
        .join('')
}

console.log(reverseString('openAi'))