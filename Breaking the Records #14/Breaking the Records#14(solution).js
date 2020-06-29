/**
 * 
 * @param {array} scores 
 */
function breakingRecords(scores) {
  var HCount = 0;
  var HScore = 0;
  var LScore = 0;
  var LCount = 0;
  for (let i = 0; i < scores.length; i++) {
    if (HScore < scores[i]) {
      HScore = scores[i];
      HCount++;
    }
  }

  for (let j = 0; j < scores.length; j++) {
    if (LScore > scores[j]) {
      LScore = scores[j];
      LCount++;
    }
  }
  return [HCount, LCount];
}
breakingRecords([1, 5, 4, 9, 8, 7, 6, 3, 1]);
