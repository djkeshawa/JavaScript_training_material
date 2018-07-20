/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Example 1
console.log(x === undefined); // true
var x = 3;

// Example 2
var myvar = 'my value';

(function(){
  console.log(myvar);
  var myvar = 'local value';
})();

// hoisting related to the let and const variables.
console.log(y);
let y=3;
/*
Exception: ReferenceError: can't access lexical declaration `y' before initialization
@Scratchpad/3:23:1
*/