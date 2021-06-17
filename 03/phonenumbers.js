/*
Problem Description
Write a program that cleans up user-entered phone numbers so that they can be
sent as SMS messages. Other than digits, the number may also contain special
character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1,
    trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1,
  then it is a bad number.
If the phone number is more than 11 digits,
  assume that it is a bad number.
For bad numbers, just a return a string of 10 zeros.

Input: String of phone number consisting of digits and other characters.

Output: String of valid phone number consisting only of the digits.
  or ten zeros for invalid numbers.

Approach:

- strip input string of anything but digits.
- check validity of new number String
  - fewer than 10 or more than 11 digits => bad
  - 11 digits and first is not 1 => bad
  - 11 digits and first is 1 => strip first => good
- return good number
  */

function phoneNumberForSMS(string) {
  let numberString = string.match(/[0-9]/g).join("");

  if (numberString.length === 10) return numberString;

  if (numberString.length === 11 && numberString[0] === "1") return numberString.slice(1);

  return "0000000000";
}

console.log(phoneNumberForSMS("123456789"));
console.log(phoneNumberForSMS("1234567890"));
console.log(phoneNumberForSMS("12345678901"));
console.log(phoneNumberForSMS("123456789012"));
console.log(phoneNumberForSMS("21234567890"));
console.log(phoneNumberForSMS("123-456--78/90"));
console.log(phoneNumberForSMS("123-456--78/901"));
console.log(phoneNumberForSMS("21/234/5 67_890"));