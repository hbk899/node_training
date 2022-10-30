const path = require('path')

console.log(path.extname(__filename))
console.log(path.dirname(__filename))

console.log(path.parse(__filenames).base)

// concatenate

console.log(path.join())