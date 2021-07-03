/*

Explicit rules from the problem:
- There are four types of plants:
  grass, clover, radishes, and violets.
- Each child gets four cups, two in each row.
- Each child's cups are in a 2x2 arrangement.
- The 2x2 arrangements are alphabetically sorted from left
  to right by the children's names.
- Seeds are randomly distributed to the cups.
- The code should be able to list the plants that
  belong to a given child.

Implicit rules from the test suite:
- We need a class "Garden".
- The constructor takes a string representing the two
  rows of plants called "diagram".
- The constructor also optionally takes an array of student names.
- An instance of the Garden class has the children's
  names as properties.
  - The value of these properties is an array of
    the plant names belonging to the child,
    ordered by left to right, then front to back.
- The class has no public methods.
  - the properties must be created and filled during
    construction.
- It seems the students parameter defaults to the full
  class from the problem description.

Algorithm to create properties and their values:
- split diagram into two rows
- create a property for each student name.
- as value check diagram rows according

*/

const PLANTS = {
  G: "grass",
  C: "clover",
  R: "radishes",
  V: "violets"
};

class Garden {
  constructor(diagram, students = ["Alice", "Bob", "Charlie",
                                   "David", "Eve", "Fred",
                                   "Ginny", "Harriet", "Ileana",
                                   "Joseph", "Kincaid", "Larry"]) {
    this.diagram = diagram.split("\n");
    this.students = students.sort();

    this._createProperties();
  }

  _createProperties() {
    this.students.forEach((student, index) => {
      this[student.toLowerCase()] =
                      (this.diagram[0].slice(index * 2, (index * 2) + 2) +
                       this.diagram[1].slice(index * 2, (index * 2) + 2))
                      .split("").map(letter => PLANTS[letter]);
    });
  }
}

module.exports = Garden;