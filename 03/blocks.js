/*
A collection of spelling blocks has two letters per block,
as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks
to only those words that do not use both letters
from any given block. You can also only use each block once.

Write a function that takes a word string as an argument,
and returns true if the word can be spelled using the set of blocks,
or false otherwise.
You can consider the letters to be case-insensitive when you apply the rules.

Input: string
Output: boolean

Rules:
- only one letter of each block
- each block only once

Approach / Algorithm:
- Split word in to letters
- For each letter
  - find block with letter <----- The tricky part.
    - if found remove block from blocks
    - if not found return false
- if blocks for every letter found return true.

Methods
- array.findIndex() to find a block with the letter.

*/

function isBlockWord(word) {
  let blocks = ["B:O", "X:K", "D:Q", "C:P", "N:A", "G:T", "R:E", "F:S", "J:W", "H:U", "V:I", "L:Y", "Z:M"];
  let letters = word.toUpperCase().split("");

  for (let index = 0; index < word.length; index += 1) {
    let blockIndex = blocks.findIndex(block => block.match(letters[index]));
    if (blockIndex === -1) return false;

    blocks.splice(blockIndex, 1);
  }

  return true;
}

console.log(isBlockWord("BAtch"));
console.log(isBlockWord("ButCh"));
console.log(isBlockWord("jest"));
console.log(isBlockWord("B"));
console.log(isBlockWord("123"));
console.log(isBlockWord(""));
console.log(isBlockWord("Xk"));