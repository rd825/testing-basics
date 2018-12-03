/**
 * The below is an accepted standard. Can be used to auto-generate docs
 * 
 * f(x) accepts a string, returns reversed
 * @param {string} string
 * @param {returns} reversedString
 */

 function reverseString(string) {
    return string.split('').reverse().join('');
 }
 
 module.exports = {
     reverseString
 }