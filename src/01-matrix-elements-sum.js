/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let zero = false;
  if (matrix === undefined) {
    return sum;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    zero = false;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        zero = true;
      }
      if (zero === false) {
        sum += matrix[j][i];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
