function validAt(email) {
  if (email.indexOf("@") !== -1 &&
      email.lastIndexOf("@") === email.indexOf("@")) return true;
  return false;
}

function validLocal(string) {
  return !string.match(/[^a-z0-9]/ig);
}

function validDomain(string) {
  if (string.match(/[^a-z.]/ig)) return false;

  let components = string.split(".");
  if (components.length < 2) return false;

  return components.every(component => component !== "");
}

function isValidEmail(email) {
  if (!validAt(email)) return false;

  let components = email.split("@");
  if (!validLocal(components[0])) return false;
  if (!validDomain(components[1])) return false;

  return true;
}

function isValidEmailRegExp(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));
console.log(isValidEmail('Foo@mx.baz.com.ph'));
console.log(isValidEmail('foo@baz.com'));
console.log(isValidEmail('foo@baz.ph'));
console.log(isValidEmail('HELLO123@baz'));
console.log(isValidEmail('foo.bar@baz.to'));
console.log(isValidEmail('foo@baz.'));
console.log(isValidEmail('foo_bat@baz'));
console.log(isValidEmail('foo@bar.a12'));
console.log(isValidEmail('foo_bar@baz.com'));
console.log(isValidEmail('foo@bar.....com'));