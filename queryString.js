/*
    input: ?foo=hello&bar=world
*/

const queryStringParse = (string) => {
    const result = {}
    const object = new URLSearchParams(string)
    try {
        for([key, value] of object.entries()) {
            if(value === "") value = true
            if(result[key]) {
                result[key] = typeof result[key] === "string" ? result[key] = [result[key], value] : result[key] = [...result[key], value]
            } else {
                result[key] = value
            }
        }
        return result
    } catch(err) {
        return new TypeError("Incorrect query string format")
    }
}

const serializeQueryObject = (object) => {
    let result = "?"
   for([key, value] of Object.entries(object)) {
    if(Array.isArray(value)) {
        value.forEach(element => result += `${key}=${element}&`)
    } else {
        result += `${key}=${value}&`
    }
   }
   return result.slice(0, -1)
}
// console.log()
console.log(serializeQueryObject(queryStringParse("?foo=hello&bar=world&baz&foo=again")))

