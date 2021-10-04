
/* Send a customized message based on time
*/
console.log("I am in the hello.js");

// get the date and time 
var today = new Date();
var hoursNow = today.getHours();

// display the greeting message 
// modify the code so that your code display "Good afternoon" whereas time is from 12:00pm to 6:00pm
var greetings = "";
if (hoursNow <= 12){
  greetings = "Good Morning";
}else{
  greetings = "Good Evening";
}


// write to the document 
document.write(greetings);