/* eslint-disable max-len */
/*
You are given a list of numbers in a "short-hand" range where
only the significant part of the next number is written because
we know the numbers are always increasing
(ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]).
Some people use different separators for their ranges
(ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent
the same numbers [1, 2, 3, 11, 12]).
Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

*/

/*
Input: String
Output: "list of numbers" => Array?

For clarification we differentiate between
the short-hand "list numbers" and the "full numbers".

Observations/Rules:
The separator, including the comma, determines
whether (-:..) or not (,) to count from the current full number to the next.

That next full number is reached by counting up from the current full number
until the last digit(s) equal the next list number.
*/

function getNextFullNumber(fullNumber, listNumber) {
  let count = fullNumber;

  do {
    count += 1;
  } while (String(count).slice(-listNumber.length) !== listNumber);

  return count;
}


function expandRange(list) {
  let numbers = [];
  let listElements = list.match(/[^\s]/g).join("")
                         .match(/^[0-9]+|[,:-][0-9]+|\.\.[0-9]+/g);

  let latest = Number(listElements.shift());
  numbers.push(latest);

  listElements.forEach(listNumber => {
    let nextFull = getNextFullNumber(latest, listNumber.slice(1));

    if (listNumber[0] === ",") {
      numbers.push(nextFull);
    } else {
      for (let count = latest + 1; count <= nextFull; count += 1) {
        numbers.push(count);
      }
    }

    latest = nextFull;
  });

  console.log(numbers);
  return numbers;
}

expandRange("1, 3, 7, 2, 4, 1");
expandRange("1-3, 1-2");
expandRange("1:5:2");
expandRange("104-2");
expandRange("104-02");
expandRange("545, 64:11");
expandRange("2, 17, 16, 8");
