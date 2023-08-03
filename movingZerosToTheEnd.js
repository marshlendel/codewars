function moveZeros(arr) {
    let zeros = []
    let result = []
    arr.forEach(item => {
      item === 0 ? zeros.push(item) : result.push(item)
    })
    return [...result, ...zeros]
  }
  