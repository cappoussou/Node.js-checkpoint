const mod = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

mod(dir, ext, (err, data) => {
    if(err) console.log(err);
    data.forEach(element => console.log(element));
});

