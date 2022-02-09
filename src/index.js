module.exports = function reverse (n) {
    const reversedNum = num => parseInt(Math.abs(num).toString().split('').reverse().join(''))
return reversedNum(n)
}
