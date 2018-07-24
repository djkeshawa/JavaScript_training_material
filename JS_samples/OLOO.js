/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

// Object Delegation (OLOO)

function Foo(who){
  this.me = who;
}
Foo.prototype.identify = function(){
  return "I am " + this.me;
};


Bar = Object.create(Foo.prototype);
Bar.init = function(who){
  Foo.call(this,who);
};

Bar.speak = function(){
  alert("Hello, " +this.identify()+".");
};
var b1 = Object.create(Bar);
b1.init('b1')
b1.speak();
