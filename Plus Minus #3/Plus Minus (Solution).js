/**
 *
 * @param {array} arr
 */
function plusMinus(arr) {
  // Declaration Section.

  let countPos = 0;
  let countNeg = 0;
  let countZero = 0;
  var length = arr.length;
  // Counting the positive, negative and null numbers in the array.

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPos++;
    } else if (arr[i] < 0) {
      countNeg++;
    } else countZero++;
  }
  // Assigning the variables to other ones for returning them.

  var resPos = countPos / length || 0;
  var resNeg = countNeg / length || 0;
  var resZero = countZero / length || 0;

  return console.log(resPos + "\n", resNeg + "\n", resZero + "\n");
}
// Execution Section .

var ar = [5, 1, -2, 0, 9, -3];
plusMinus(ar);
