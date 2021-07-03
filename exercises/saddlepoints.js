/*
Problem:

Write a program that detects saddle points in a matrix.

It's called a "saddle point" because it is greater than
or equal to every element in its row and the less than
or equal to every element in its column.

A matrix may have zero or more saddle points.

Your code should be able to provide the (possibly empty)
list of all the saddle points for any given matrix.

The matrix can have a different number of rows and columns (Non square).


Explicit Rules:
- saddle point >= every element in its rows
- saddle point <= every element in its column
- matrix can have zero or more saddle points
- matrix can be non-square

Implicit Rules and Expectations:
- Create class matrix
- constructor expects string representation of matrix:
  column values separated by spaces, rows separated by \n
- object has property rows, an array of row arrays with numbers.
- abject has property columns, an array of column arrays with numbers.
- object has property saddlePoints, an array of coordinates
  of the saddle points.

Algorithm
1 Setting up the object:
- parse string representation into matrix (array of arrays)
  1. split string into array of row strings
  2. split row strings into arrays of numbers

- assign matrix to rows property
- create transposed matrix
- assign transposed matrix to columns property

2 Finding the Saddle Points
- Go through each row.
  - Check if current number is highest in row.
    - if it is, check whether the number is the
      lowest in corresponding columnIndex
      - if it is, push current row index and column index to result

*/

class Matrix {
  constructor(string) {
    this.rows = this.rowsFromString();
    this.columns = transpose(this.rows);
    this.saddlePoints = this.findSaddlePoints();
  }

  rowsFromString(string) {
    return string.split("\n").map(string => string.trim().split(" ").map(Number));
  }

  transpose(matrix) {
    return matrix[0].map((_, columnIndex) =>
           matrix.map(row => row[columnIndex]));
  }

  findSaddlePoints() {
    let points = [];
    for (let y = 0; y < this.rows.length; y += 1) {
      for (let x = 0; x < this.columns.length; x += 1) {
        if ((this.rows[y][x] === Math.max(...this.rows[y])) &&
             this.rows[y][x] === Math.min(...this.columns[x])) {
               points.push([y, x]);
        }
      }
    }
    return points;
  }
}

module.exports = Matrix;