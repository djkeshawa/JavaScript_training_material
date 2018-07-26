/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
// String templates and Tag function

function foo(strings,...args){
  console.log(strings);
  console.log(args);
  return ([...strings,...args]);
}

var name  = "Dineth";
var orderNumber = "123";
var total = 319.7;

// here foo is called as a tag function. The string was created using
// string template structure
var msg = foo`Hello ${name} your order number is ${orderNumber} \
and total is $${total}`;

console.log(msg)

