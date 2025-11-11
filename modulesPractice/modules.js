console.log(arguments);
console.log(require("module").wrapper);
const C = require('./text-module-1.js');
const calc1 = new C();
console.log(calc1.add(2, 5));

const calc2 = require('./test-module-2.js');
console.log(calc2.add(2, 5));


//caching
require('./test-module-3.js')();
require('./test-module-3.js')();
require('./test-module-3.js')();