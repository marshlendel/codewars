class RomanNumerals {
  static toRoman(num) {
    const romanNumerals = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };
    let result = "";
    for (let value of Object.keys(romanNumerals).reverse()) {
      while (num >= value) {
        result += romanNumerals[value];
        num -= value;
      }
    }
    return result;
  }

  static fromRoman(str) {
    const numeralValues = {
      I: 1,
      IV: 4,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let result = 0;

    for (let i = 0; i < str.length; i++) {
      if (numeralValues[str[i]] >= (numeralValues[str[i + 1]] ?? -Infinity)) {
        result += numeralValues[str[i]];
      } else {
        result -= numeralValues[str[i]];
      }
    }
    return result;
  }
}

console.log(RomanNumerals.fromRoman("XXI"));
