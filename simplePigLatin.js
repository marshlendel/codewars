function pigIt(str){
    return str.split(/\s+/).map((word) => {
      if(/^[a-zA-Z0-9]+$/.test(word)) {
          return word.slice(1) + word[0] + "ay"
      }
        return word
    }).join(" ")
  }