function isBalanced(string) {
  let paras = [];

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === "(") paras.push("(");
    if (string[index] === ")") {
      if (!paras.pop()) return false;
    }
  }

  return paras.length === 0;
}

console.log(isBalanced('What (is) this?'));
console.log(isBalanced('What is) this?'));
console.log(isBalanced('What (is this?'));
console.log(isBalanced('((What) (is this))?'));
console.log(isBalanced('((What)) (is this))?'));
console.log(isBalanced('Hey!'));
console.log(isBalanced(')Hey!('));
console.log(isBalanced('What ((is))) up('));
