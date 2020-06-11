function compareTriplets(a, b) {
  // making score variables for Bob And Alice.

  var ScoreA = 0;
  var ScoreB = 0;
  // Looping on all the conditions and adding the score.

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      ScoreA++;
    } else if (b[i] > a[i]) {
      ScoreB++;
    }
  }

  return [ScoreA, ScoreB];
}
//  Executing The Function.

var c = [7, 3, 9];
var d = [7, 11, 54];
compareTriplets(c, d);
