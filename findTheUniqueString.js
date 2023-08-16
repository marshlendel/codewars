// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

function findUniq(arr) {
    let lettersInArr = (arr, string) => string.toLowerCase().split("").every(letter => arr.includes(letter))
    let sortString =  (string) => string.toLowerCase().split("").sort().join("").trim()
    let bank = []
    let result;
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i].length === 0 ? arr[i] + " " : arr[i]
    if(i === 0) {
        bank = string.length ? [...new Set(string.toLowerCase().trim().split(""))] : [" "]
    }
    if(lettersInArr(bank, string)) {
        continue
    } else {
        if(i === 1) {
            console.log(bank)
            result = sortString(string) === sortString(arr[arr.length - 1]) ? arr[0] : string
            break;
        }
        result = string
        break;
    }
  }
  return result
}