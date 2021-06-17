/*

The Luhn formula is a simple checksum formula used to validate a variety
of identification numbers, such as credit card numbers or Canadian Social
Insurance Numbers.

The formula verifies a number against its included check digit,
which is usually appended to a partial number to generate the full number.
This number must pass the following test:

Counting from the rightmost digit and moving left,
double the value of every second digit

For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0
(put another way, if the total modulo 10 is congruent to 0),
then the number is valid according to the Luhn Formula;
else it is not valid.

Thus, 1111 is not valid (as shown above, it comes out to 6),
while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format,
check if it is valid per the Luhn formula.
This should treat, for example, "2323 2005 7766 3554" as valid.
You can ignore all non-numeric characters in the input string.

Input: String with numerical and other characters.
Only the numerical characters are of importance.

Output: Validity of the numbers according to Luhn's formula. (true or false)

Approach:
- Strip input sting of anything but the numbers.
- Go through digits right to left and modify them according to Luhn:
  - double every second digit
  - if the double is less than 10 replace digit with double
  - if the double is greater than 9 then replace digit with double - 9
- Calculate the digit sum of the thus modified numbers.
- If the digit sum modulo 10 is 0 => valid
  - otherwise not valid

Methods and helpers:
- match() to extract the numbers-only string as digits array.
- reverse() digits to easily start from originally rightmost digit.
- reduce() to calculate the digit sum.

*/

function luhnSum(string, start = 1) {
  let digits = string.match(/[0-9]/g).map(Number).reverse();

  for (let index = start; index < digits.length; index += 2) {
    let double = digits[index] * 2;
    if (double > 9) {
      digits[index] = double - 9;
    } else {
      digits[index] = double;
    }
  }

  return digits.reduce((acc, elem) => acc + elem, 0);
}

function validLuhn(string) {
  return luhnSum(string) % 10 === 0;
}

function luhnify(string) {
  if (validLuhn(string)) return string;

  let checkDigit = 10 - (luhnSum(string, 0) % 10);
  return string + checkDigit;
}


console.log(validLuhn("0"));
console.log(validLuhn("1111"));
console.log(validLuhn("8763"));
console.log(validLuhn("2323 2005 7766 3554"));
console.log(validLuhn("2323-2005-7766tzj3554"));

console.log(luhnify("2323 2005 7766 3554"));
console.log(luhnify("2323 2005 7766 355"));