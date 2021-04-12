/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let j = 0;
  const arrTemp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arrTemp.push(arr[i]);
    }
  }
  arrTemp.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      j++;
    } else {
      arr.splice(i, 1, arrTemp[i - j]);
    }
  }
  return arr;
}

module.exports = sortByHeight;
