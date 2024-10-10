# FILESYSTEM (aka: FS)

# Import Module
```js
const fs = require('fs') // plain Javascript

// OR

import fs from "fs"; // ES6 (modern Javascript) (not recommended when using environment variables)
```

> **NOTE !**
>
> When using the `__dirname` or `__filename` in node, it is better to NOT use ES6 imports. Those environment variables are not completely supported yet. Generally, when just using node (no frameworks), going with plain javascript is more recommended for now (until ES6 is completely included into Node). 

# Basic methods
> **NOTE**
>
> This file is also using the `path` variable, so make sure it is imported as well!

```js
// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created...');
});

// Create and write to file
fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'Hello World!',
    err => {
        if (err) throw err;
        console.log('File written to...');

        // File append
        fs.appendFile(
        path.join(__dirname, '/test', 'hello.txt'),
        ' I love Node.js',
        err => {
            if (err) throw err;
            console.log('File written to...');
        }
        );
    }
);

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed...');
  }
);
```