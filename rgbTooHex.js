function rgb(r, g, b){
    const roundedValues = [r, g, b].map(value => {
      return Math.max(0, Math.min(255, value))
    })
    return [...roundedValues].map(num => parseInt(num).toString(16).padStart(2, '0')).join('').toUpperCase()
  }