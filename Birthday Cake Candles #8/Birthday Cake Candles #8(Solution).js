/**
 *
 * @param {array} arr
 */
function birthdayCakeCandles(ar) {
  // Finding the maximum Number in the array

  let max = Math.max(...ar);
  return ar.filter((item) => item === max).length;
}
// Execution Section

var arr = [1, 2, 3, 4];
birthdayCakeCandles(arr);
