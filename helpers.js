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

 function returnArray() {
     return [1,2,3,4];
 }
 
 module.exports = {
     reverseString,
     returnArray,
 }