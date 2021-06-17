/*

Input: string
Output: string

Observations / Rules:
- The Message is placed on a matrix.
- The width w of the matrix equals the length of the message.
- The height h of the matrix can be freely determined, it is 3 in the examples.

Encrypting:
=> The x position of each letter equals its position in the text.
=> The y position is dependent on its x-position and the height. <--- Key puzzle
=> Fill the matrix accordingly going from left to right.
=> Combine rows to form encrypted message.

Decrypting:
=> Create w by h matrix and fill with placeholders
=> Replace placeholders by message letters row by row.
=> Read out decrypted message left to right.

Matrix:
=> Represent the matrix as and array of h arrays of length w.
=> Fill arrays with "."

Key puzzle: y(x, h)?
- Repeating pattern => use modulo?
- Change of direction => use Math.abs?

=> y(x, h) = h - Math.abs( (x % (2 * h - 2)) - h + 1)

*/


// MAIN FUNCTIONS

function railCipher(message, rails = 3) {
  let stripped = strip(message);
  let matrix = emptyMatrix(stripped.length, rails);

  fillMatrix(matrix, stripped);

  return combineRows(matrix);
}


function railDecipher(message, rails = 3) {
  let placeholder = "?";
  let matrix = emptyMatrix(message.length, rails);

  fillMatrix(matrix, placeholder);

  replacePlaceholders(matrix, message, placeholder);

  return combineColumns(matrix);
}


// MAGIC FORMULA

function y(x, height) {
  return height - Math.abs((x % ((2 * height) - 2)) - height + 1);
}


// HELPER FUNCTIONS

function strip(message) {
  return message.replace(/\W/g, "").toUpperCase();
}


function emptyMatrix(width, height) {
  let matrix = [];
  for (let count = 0; count < height; count += 1) {
    matrix.push(new Array(width));
  }
  return matrix;
}


function fillMatrix(matrix, string) {
  let placeholder = string.length < 2;
  let width = matrix[0].length;
  let height = matrix.length;

  for (let x = 0; x < width; x += 1) {
    matrix[y(x, height) - 1][x] = placeholder ? string : string[x];
  }
}


function replacePlaceholders(matrix, message, placeholder) {
  let msgArray = message.split("");

  matrix.forEach(row => {
    do {
      row[row.indexOf(placeholder)] = msgArray.shift();
    } while (row.indexOf(placeholder) !== -1);
  });
}


function combineRows(matrix) {
  return matrix.map(row => row.join("")).join("");
}


function combineColumns(matrix) {
  let message = "";
  let width = matrix[0].length;
  let height = matrix.length;

  for (let x = 0; x < width; x += 1) {
    message += matrix[y(x, height) - 1][x];
  }

  return message;
}


// TESTING IT OUT

console.log(railCipher("Encrypt this!"));
console.log(railDecipher("EYHNRPTICTS"));

console.log(railCipher("WE ARE DISCOVERED FLEE AT ONCE"));
console.log(railDecipher("WECRLTEERDSOEEFEAOCAIVDEN"));