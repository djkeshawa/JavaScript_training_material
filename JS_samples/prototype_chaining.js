/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// prototype chaining

function foo(bar){
 this.me  = bar; 
}

foo.prototype.identify = function identify(){
  console.log('This is me '+this.me);
}

var obj1 = new foo('obj1');
var obj2 = new foo('obj2');

// obj1.identify();
// obj2.identify();

console.log(obj1.__proto__.identify())