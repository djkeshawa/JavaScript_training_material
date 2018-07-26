/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Custom object iterator

var obj = {
  [Symbol.iterator](){
    var index = this.start, en = this.end;
    var it  = {
      next:()=>{
        if(index<=en){
          var v = this.values[index];
          index++;
          return {value:v, done:false}
        }
        else{
          return {done:true}
        }
        
      }
    };
    return it
  },
  values:[1,3,4,6,8,45,5,34,67,88,1,43,87,8,31,9,56,23,12,23,21],
  start:0,
  end:obj.values.length-1
};

var arr = [...obj];
console.log(arr);