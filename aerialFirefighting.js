function waterbombs(fire, w) {
  return fire.split("Y").reduce((numOfBombs, fire) => {
    let fireRange = fire.length;
    while (fireRange > 0) {
      fireRange -= w;
      numOfBombs++;
    }
    return numOfBombs;
  }, 0);
}

console.log(waterbombs("xxxxYxYx", 5));
