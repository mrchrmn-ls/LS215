let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function copyBands(data) {
  let copy = [];
  data.forEach(band => copy.push(Object.assign({}, band)));
  return copy;
}

function capitalize(word) {
  let letters = word.split("");
  letters[0] = letters[0].toUpperCase();
  return letters.join("");
}

function capitalizeAll(words) {
  return words.split(" ").map(word => capitalize(word)).join(" ");
}

function processBands(data) {
  return copyBands(data).map(band => {
    band.name = band.name.split(".").join("");
    band.name = capitalizeAll(band.name);
    band.country = 'Canada';
    return band;
  });
}

processBands(bands);

console.log(bands);

console.log(processBands(bands));