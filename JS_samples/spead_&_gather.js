/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function foo(x,y,z,...args){
  console.log(...args);
  var arr = [x,...args];
  return arr;
}

function bar(){
  var a1= [2,4];
  var a2 = [6,8,10,12];
  
  return foo(...a1,...a2);
}
console.log(bar().join('')==='281012');