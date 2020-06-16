/**
 *
 * @param {Number} x1
 * @param {Number} v1
 * @param {Number} x2
 * @param {Number} v2
 */
function kangaroo(x1, v1, x2, v2) {
  let result = (x1 - x2) % (v2 - v1);
  var yes = "YES",
    no = "NO";
  // Eliminating all cases

  if (x1 < x2 && v1 < v2) {
    return no;
  } else {
    // else cases to get out of the way like v2 never equals v1.

    if (v1 != v2 && result == 0) {
      return yes;
    } else {
      return no;
    }
  }
}
// Executing Function Example:

kangaroo(35, 1, 45, 3);
