/* eslint-disable max-lines-per-function */
let Matrix = require("./saddlepoints");

describe("Matrix", () => {
  test("extracts a row", () => {
    const matrix = new Matrix("1 2");
    expect(matrix.rows[0]).toEqual([1, 2]);
  });

  test("extracts other row", () => {
    const matrix = new Matrix("9 8 7\n19 18 17");
    expect(matrix.rows[1]).toEqual([19, 18, 17]);
  });

  test("extracts a column", () => {
    const matrix = new Matrix("1 2 3\n4 5 6\n7 8 9\n 8 7 6");
    expect(matrix.columns[0]).toEqual([1, 4, 7, 8]);
  });

  test("extracts another column", () => {
    const matrix = new Matrix("89 1903 3\n18 3 1\n9 4 800");
    expect(matrix.columns[1]).toEqual([1903, 3, 4]);
  });

  test("no saddle point", () => {
    const matrix = new Matrix("2 1\n1 2");
    expect(matrix.saddlePoints).toEqual([]);
  });

  test("a saddle point", () => {
    const matrix = new Matrix("1 2\n3 4");
    expect(matrix.saddlePoints).toEqual([[0, 1]]);
  });

  test("another saddle point", () => {
    const matrix = new Matrix("18 3 39 19 91\n38 10 8 77 320\n3 4 8 6 7");
    expect(matrix.saddlePoints).toEqual([[2, 2]]);
  });

  test("multiple saddle points", () => {
    const matrix = new Matrix("4 5 4\n3 5 5\n1 5 4");
    expect(matrix.saddlePoints).toEqual([[0, 1], [1, 1], [2, 1]]);
  });
});