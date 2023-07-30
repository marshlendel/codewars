function solution(list) {
    const result = [];
    const currentRange = [];
    list.forEach((number, index) => {
      if (currentRange.length === 0) {
        currentRange.push(number);
      } else {
        if (Math.abs(number - currentRange[currentRange.length - 1]) === 1) {
          currentRange.push(number);
          if(index  === list.length - 1) {
             currentRange.length >= 3 ? result.push(`${currentRange[0]}-${currentRange[currentRange.length - 1]}`) : result.push(...currentRange)
          }
        } else {
          currentRange.length >= 3 ? result.push(`${currentRange[0]}-${currentRange[currentRange.length - 1]}`
          ) : result.push(...currentRange)
          currentRange.length = 0
          currentRange.push(number)
          if(index  === list.length - 1) {
          result.push(...currentRange)
          }
        }
      }
    });
    return result.join(",")
}
