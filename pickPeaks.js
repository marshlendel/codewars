// In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

// Example:  should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

// All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

// Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

function pickPeaks(arr) {
  return arr.reduce(
    (acc, number, index) => {
      if (index !== 0 && index !== arr.length - 1) {
        let isPeak = false;
        let isPlateau = false;
        let plateauStart = null;
        for (let i = index + 1; i < arr.length; i++) {
          if (number > arr[i]) {
            isPeak = true;
            break;
          } else if (number === arr[i]) {
            isPlateau = true;
            continue;
          } else {
            break;
          }
        }
        if (isPeak) {
            isPeak = false
          for (let i = index - 1; i >= 0; i--) {
            if (number > arr[i]) {
                isPeak = true;
              if (isPlateau) {
                plateauStart = i + 1;
              }
              break;
            } else if (number === arr[i]) {
              isPlateau = true;
              continue;
            } else {
              break;
            }
          }
        }
        if (isPeak) {
          if (isPlateau && plateauStart) {
            return !acc.pos.includes(plateauStart)
              ? {
                  pos: [...acc.pos, plateauStart],
                  peaks: [...acc.peaks, number],
                }
              : acc;
          }
          return { pos: [...acc.pos, index], peaks: [...acc.peaks, number] };
        }
      }
      return acc;
    },
    { pos: [], peaks: [] }
  );
}

console.log(
  pickPeaks(
    [  3,  3, -2, 13, 15, 0, 15,  6,  0,  0,
        2,  9, -4, 12, -1, 8,  2, 15, 15, 11,
       14,  1, -2, 14, -4, 5, 13, -2, 14, 11,
        2, 11,  0,  6,  9, 3,  7 
  ])
);

