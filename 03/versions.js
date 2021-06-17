/*

Input: Strings of numbers seperated by dots.

Output: 1 if version 1 is greater than version 2
        -1 if version 1 is smaller than version 2
        0 if both versions are equal

        null if the input is not valid (only numbers and dots)

Example: 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

Approach: Compare numbers from left to right.

Algorithm:
- Separate each version number into version digits.
- Go through version digits and compare them
  - If one is greater than the other the comparison is settled.
  - If they are equal the compare the next set of digits.
- If only one number is out of digits before a conclusion,
  check whether any of the remaining digits of the longer
  number is greater than 0.
    Otherwise the numbers are equal.

    */

function isAllZero(array) {
  return array.every(element => element === "0");
}

function invalid(version) {
  return !version.match(/^[0-9]+(\.[0-9]+)*$/gi);
}

function compareVersions(version1, version2) {
  if (invalid(version1) || invalid(version2)) return null;

  let digits1 = version1.split(".");
  let digits2 = version2.split(".");

  let minLength = Math.min(digits1.length, digits2.length);

  for (let position = 0; position < minLength; position += 1) {
    if (Number(digits1[position] > Number(digits2[position]))) return 1;
    if (Number(digits1[position] < Number(digits2[position]))) return -1;
  }

  if (digits1.length === digits2.length) return 0;

  if (digits1.length > digits2.length) {
    if (isAllZero(digits1.slice(minLength))) return 0;
    return 1;
  }

  if (isAllZero(digits2.slice(minLength))) return 0;
  return -1;
}

console.log(compareVersions("12..4", "13.37"));