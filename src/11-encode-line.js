/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const arrNew = [];
  let count;
  let i;
  let j;
  for (i = 0; i < arr.length; i++) {
    count = 1;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      } else {
        break;
      }
    }
    if (count > 1) {
      arrNew.push(`${count}${arr[i]}`);
    } else {
      arrNew.push(arr[i]);
    }
    arr.splice(i, count);
    i--;
  }
  return arrNew.join('');
}

module.exports = encodeLine;
