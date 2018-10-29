console.log('App working: open app/index.js to start exploring ES6');

import * as math from './math';
import {addToDom as blah} from './helpers';

console.log('Math: ', math)

blah('h1',`23 + 67 = ${math.add(23,67)}`);

blah('h1', `56 - 14 = ${math.subtract(56,14)}`);

blah('h1',`10 * 11 = ${math.multiply(10,11)}`);

blah('h1',`27 / 3 = ${math.divide(27,3)}`);