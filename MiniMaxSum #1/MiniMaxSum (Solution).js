/**
 *
 * @param {array} arr
 */
function minimaxSum(arr) {
  // Declaration
  var MinSum = 0;
  var MaxSum = 0;

  // Sorting Array
  arr.sort();

  // Sum Looping
  for (let i = 1; i < arr.length; i++) {
    MaxSum += arr[i];
  }

  for (let j = 0; j < arr.length - 1; j++) {
    MinSum += arr[j];
  }

  console.log(MinSum + " " + MaxSum);
}

var ar = [1, 2, 3, 4, 5];

minimaxSum(ar);
