function stripPoint(string) {
  return string.slice(0, string.length - 1);
}

function isOdd(number) {
  return number % 2 === 1;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function stripEmpty(array) {
  return array.filter(element => element !== "");
}

function oddWords(string) {
  let text = stripPoint(string).trim();
  let words = stripEmpty(text.split(" "));

  return words.map((word, index) => {
    if (isOdd(index)) {
      return reverse(word);
    } else {
      return word;
    }
  }).join(" ").concat(".");
}

console.log(oddWords("Hello World."));
console.log(oddWords("Hello World  ."));
console.log(oddWords("Hello cruel World."));
console.log(oddWords("Hello  cruel  World."));