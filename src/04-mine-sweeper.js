/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixNew = new Array(matrix.length);
  let count;
  for (let i = 0; i < matrix.length; i++) {
    matrixNew[i] = new Array(matrix[0].length);
    for (let j = 0; j < matrix[0].length; j++) {
      count = 0;
      if (matrix[i][j] === true) {
        matrixNew[i][j] = 1;
      } else {
        if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] === true) {
          count++;
        }
        if (i - 1 >= 0 && matrix[i - 1][j] === true) {
          count++;
        }
        if (i - 1 >= 0 && j + 1 < matrix[0].length && matrix[i - 1][j + 1] === true) {
          count++;
        }
        if (j - 1 >= 0 && matrix[i][j - 1] === true) {
          count++;
        }
        if (j + 1 < matrix[0].length && matrix[i][j + 1] === true) {
          count++;
        }
        if (i + 1 < matrix.length && j - 1 >= 0 && matrix[i + 1][j - 1] === true) {
          count++;
        }
        if (i + 1 < matrix.length && matrix[i + 1][j] === true) {
          count++;
        }
        if (i + 1 < matrix.length && j + 1 < matrix[0].length && matrix[i + 1][j + 1] === true) {
          count++;
        }
        matrixNew[i][j] = count;
      }
    }
  }
  return matrixNew;
}

module.exports = minesweeper;
