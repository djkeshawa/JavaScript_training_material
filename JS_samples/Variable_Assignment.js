/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// determining whether a varible is undefined
var input;
if(input===undefined){
  console.log("if condition is true");
}else{
  console.log("if condition is false");
}

// beavior of undefine
var myArray = [];
if(!myArray[0]){
  console.log("if condition is true: behavior defined");
}

// undefinend conversion to Nan
var a;
console.log(a+2);

// undefine conversion to 0
var n = null;
console.log(n*32);

/* Variable Scope */

// before ECMAScript 2015
if(true){
  var x=5;
}
console.log(x);

// After ECMAScript 2015
if(true){
  let y=5;
}
console.log(y);

/*
Exception: ReferenceError: y is not defined
@Scratchpad/2:44:1
*/

/* Indicate that varibale y is local to the block only*/

