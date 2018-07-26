/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Computed generators

var obj = {
  *[Symbol.iterator](){
  for(var i = this.start;i<=this.end;i++){
    yield this.values[i];
  }
  },
  values:[1,3,4,6,8,45,5,34,67,88,1,43,87,8,31,9,56,23,12,23,21],
  start:0,
  end:obj.values.length-1
};

var arr = [...obj];
console.log(arr);