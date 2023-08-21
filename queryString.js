/*
    input: ?foo=hello&bar=world
*/

const queryStringParse = (string) => {
    const object = new URLSearchParams(string)
    return   Object.fromEntries(object.entries())
}

console.log(queryStringParse("?foo=hello&bar=world&zebra=hi"))