/**
 *
 * @param {array} grades
 */
function gradingStudents(grades) {
  var Students = [];
  // Looping in the array to round integers that are bigger than 38.

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % 5 > 2) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    }
  }
  // Copying the grades to another array.

  for (let j = 0; j < grades.length; j++) {
    Students[j] = grades[j];
  }
  return console.log(Students);
}
// Execution Block.

var grade = [73, 99, 38, 33];
gradingStudents(grade);
