/**
 *
 * @param {number} n
 */
function staircase(n) {
  for (var i = 0; i < n; i++) {
    //Declaring Variables

    var spaces = new Array(n - i).join(" ");
    var hashes = new Array(2 + i).join("#");

    //Printing the result

    console.log(spaces + hashes);
  }
}

// Execution of the function

staircase(6);
