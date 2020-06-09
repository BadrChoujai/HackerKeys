/**
 *
 * @param {array} arr
 */
function diagonalDifference(arr) {
  // Declaration Section.

  var sum = 0;
  var sum1 = 0;
  // Looping In The Diagonal To sum the numbers.

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
    sum1 += arr[i][arr.length - i - 1];
  }
  // Returning the absolute value of the difference of the 2 Sums.

  return Math.abs(sum - sum1);
}
// Execution Section .

var ar = [11, 2, 4, 4, 5, 6, 10, 8, -12];
diagonalDifference(ar);
