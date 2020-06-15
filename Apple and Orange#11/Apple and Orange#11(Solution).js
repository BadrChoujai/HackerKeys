/**
 *
 * @param {Number} s
 * @param {Number} t
 * @param {Number} a
 * @param {Number} b
 * @param {array} apples
 * @param {array} oranges
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0,
    orangeCount = 0,
    p1 = 0,
    p2 = 0;
  while (p1 < apples.length || p2 < oranges.length) {
    // apple count

    if (apples[p1] >= 0) {
      let appleVal = a + apples[p1];
      if (appleVal >= s && appleVal <= t) {
        appleCount += 1;
        p1 += 1;
      } else {
        p1 += 1;
      }
    } else {
      p1 += 1;
    }

    // oranges count

    if (oranges[p2] < 0) {
      let orangeVal = b + oranges[p2];
      if (orangeVal >= s && orangeVal <= t) {
        orangeCount += 1;
        p2 += 1;
      } else {
        p2 += 1;
      }
    } else {
      p2 += 1;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
// Executing Function

var app = [2, 3, -4];
var oran = [5, 6, 1];
countApplesAndOranges(7, 15, 4, 12, app, oran);
