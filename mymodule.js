const path = require('path');
const fs = require('fs');

module.exports = function (dir, ext, cb) {
    fs.readdir(dir, (err, data) => {
        if(err) return cb(err);
        
        cb(
            null,
            data.filter(file => path.extname(file) === `.${ext}`)
        );
    });
} 