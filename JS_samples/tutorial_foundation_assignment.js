/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var phone_price = 100.00;
var headPhone_price =40.50;
var charger_price = 10.75;

function purchase(amount){
  var total_purchase_amount = 0.00;
  var shoud_purchase_amount = 0.00;
  
  while(amount>=total_purchase_amount){
    
    if(amount<total_purchase_amount){
      break;
    }
    shoud_purchase_amount = total_purchase_amount;
    total_purchase_amount += phone_price;
         if(amount<total_purchase_amount){
      break;
    }
    shoud_purchase_amount = total_purchase_amount;
    total_purchase_amount += headPhone_price;
    
    if(amount<total_purchase_amount){
      break;
    }
    shoud_purchase_amount = total_purchase_amount;
    total_purchase_amount += charger_price;
  }
  
   return shoud_purchase_amount.toFixed(2);
}


var amount  = prompt("please enter your available amount");
var total= purchase(amount);
console.log(total)


/*
Exception: ReferenceError: cosole is not defined
purchase@Scratchpad/1:25:5
@Scratchpad/1:47:12
*/