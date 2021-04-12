/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let n = 0;
  let k = array.length;
  let l;

  function find() {
    l = Math.round((k - n) / 2);
    if (array[n + l] > value) {
      k -= l;
      find();
    } else if (array[n + l] < value) {
      n += l;
      find();
    }
  }
  find();
  return n + l;
}

module.exports = findIndex;
