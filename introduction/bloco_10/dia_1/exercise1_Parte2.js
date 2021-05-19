function encode(encodeVowels) {
for (let index = 0; index < encodeVowels.length; index += 1) {
  encodeVowels = encodeVowels.replace('a', 1);
  encodeVowels = encodeVowels.replace('e', 2);
  encodeVowels = encodeVowels.replace('i', 3);
  encodeVowels = encodeVowels.replace('o', 4);
  encodeVowels = encodeVowels.replace('u', 5);
}

return encodeVowels;
}
function decode(decodeVowels) {
for (let index = 0; index < decodeVowels.length; index += 1) {
  decodeVowels = decodeVowels.replace(1, 'a');
  decodeVowels = decodeVowels.replace(2, 'e');
  decodeVowels = decodeVowels.replace(3, 'i');
  decodeVowels = decodeVowels.replace(4, 'o');
  decodeVowels = decodeVowels.replace(5, 'u');
}
return decodeVowels;
}

module.exports = {
  encode,
  decode,
};