/**
 *
 * @param {array} ar
 */
function aVeryBigSum(ar) {
  // Declaring The sum variable

  var BigSum = 0;
  // Looping the whole array to sum each element.

  for (let i = 0; i < ar.length; i++) {
    BigSum = BigSum + ar[i];
  }

  return BigSum;
}
