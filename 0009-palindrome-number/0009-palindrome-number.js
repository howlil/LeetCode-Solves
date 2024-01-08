/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const newx = x.toString();
  const reverse = newx.split("").reverse().join("");
  return newx === reverse; 
}

const angka = 121;
console.log(isPalindrome(angka)); // Output: true

