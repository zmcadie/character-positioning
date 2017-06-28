var input = "lighthouse in the HOUSE".toLowerCase();

function countLetters(string) {
  var letterIndices = {};

  for (var i = 0; i < string.length; i ++) {
    var letter = string[i]
    if (letter === ' ') continue;
    if (letterIndices[letter] === undefined) letterIndices[letter] = [];
    letterIndices[letter].push(i);
  };

  return letterIndices;
};

console.log(countLetters(input));