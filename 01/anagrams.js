function anagram(word, list) {
  function letterSorted(string) {
    return string.split("").sort().join("");
  }

  return list.filter(listWord => letterSorted(word) === letterSorted(listWord));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));