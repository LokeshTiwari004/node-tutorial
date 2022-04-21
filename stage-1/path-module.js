const path = require('path');

console.log(path.sep);

const filename = path.join('/content//', 'subfolder', 'text.txt')

console.log(filename);

console.log(path.basename(filename));

console.log(path.resolve(__dirname, 'content', 'subfolder', 'text.txt'));