function alphabetPosition(text) {
  return text
    .split("")
    .filter((letter) => /^[a-zA-Z]$/.test(letter))
    .map((letter) => letter.toLowerCase().charCodeAt(0) - 96)
    .join(" ");
}
