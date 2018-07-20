/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// declaring a constant variable same as function
function f(){};
  const f = 5;
/*
Exception: SyntaxError: redeclaration of function f
@Scratchpad/5:12
*/

// declaring a variable with same name as the constant within the same  scope
function f(){
  const g = 5;
  var g;
}
/*
Exception: SyntaxError: redeclaration of const g
@Scratchpad/5:22
*/