function isPalindrome(text = '') {
    const newStr = text
        .trim()
        .toLowerCase()
        .split('')
        .filter(char => char !== ',')
        .join('')

    return newStr === newStr.split('').reverse().join('')
}

console.log(isPalindrome('A man, a plan, a canal, Panama'))