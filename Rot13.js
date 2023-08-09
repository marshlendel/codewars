// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  return message
    .split("")
    .map((letter) => {
      if (/^[a-zA-Z]$/.test(letter)) {
        let startCode =
          letter === letter.toLowerCase()
            ? "a".charCodeAt(0)
            : "A".charCodeAt(0);
        return String.fromCharCode(
          startCode + ((letter.charCodeAt(0) + 13 - startCode) % 26)
        );
      }
      return letter;
    })
    .join("");
}

console.log(rot13("Hello there"));
console.log(39 % 26)
