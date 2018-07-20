/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

/* Function Hoisting */

// function declaration
foo();

function foo(){
  console.log('bar');
}

// Function Expressions
baz();

var baz = function(){
  console.log('bar2');
};
/*
Exception: TypeError: baz is not a function
@Scratchpad/4:20:1
*/