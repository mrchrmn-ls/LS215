/*

Create a class Queens.

The constructor takes two arrays as arguments, indicating the positions
of the black and white queen.

The black and white positions must not be the same.

The positions count from 1 to 8, the board is 8x8.

There is a method attack() that returns true if the queens can attack
each other, meaning they are on the same row, column or diagonal.

same row and same column are easy => compare x or y coordinates.

for diagonal, the absolute difference between rows and columns must be the same.

There is a method toString() that returns an ASCII character
representation of the board.


*/


class Queens {
  constructor(white = [1, 4], black = [6, 7]) {
    if (white.toString() === black.toString()) {
      throw new Error("Queens cannot be placed on the same field.");
    }
    this.white = white.map(pos => pos - 1);
    this.black = black.map(pos => pos - 1);
  }

  toString() {
    let board = new Array(8).fill("").map(_row => new Array(8).fill(" - "));

    board[this.white[1]][this.white[0]] = " W ";
    board[this.black[1]][this.black[0]] = " B ";

    return board.map(row => row.join("")).join("\n");
  }

  canAttack() {
    return this._sameRow() || this._sameColumn() || this._diagonal();
  }

  _sameRow() {
    return this.white[1] === this.black[1];
  }

  _sameColumn() {
    return this.white[0] === this.black[0];
  }

  _diagonal() {
    return Math.abs(this.white[0] - this.black[0]) ===
           Math.abs(this.white[1] - this.black[1]);
  }
}


let queens = new Queens([8, 7], [2, 1]);

console.log(queens.toString());

console.log(queens.canAttack());