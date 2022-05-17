
const fs = require('fs') ;

fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1);









