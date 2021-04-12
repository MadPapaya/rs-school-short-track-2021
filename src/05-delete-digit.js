/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let min = arr[0];
  arr.forEach((element) => {
    if (element < min) {
      min = element;
    }
  });
  arr.splice(arr.indexOf(min), 1);
  return Number(arr.join(''));
}

module.exports = deleteDigit;
