# PATH

# Import Module
```js
const path = require('path') // plain Javascript

// OR

import path from "path"; // ES6 (modern Javascript) (not recommended when using environment variables)
```

> **NOTE !**
>
> When using the `__dirname` or `__filename` in node, it is better to NOT use ES6 imports. Those environment variables are not completely supported yet. Generally, when just using node (no frameworks), going with plain javascript is more recommended for now (until ES6 is completely included into Node). 

# Basic methods

Try these out for yourself to see what you can do with it:

```js
// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
// Get property from path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
```