/**
 *
 * @param {array} ar
 */
function simpleArraySum(ar) {
  var sum = 0;
  // summing all array values

  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }

  return sum;
}
// Executing function example:

var arr = [1, 2, 3, 6, 6, 5];
simpleArraySum(arr);
