/*
 * A simple hello message
 * 
 */



// declare variables 
var today;
var hoursNow;
var greetings;


// get the date
today = new Date();
hoursNow = today.getHours();

// display appropriate greeting message
if (hoursNow <=12){
    greetings = "GOOD MORNING";
}else if (hoursNow <=18){
    greetings = "GOOD Afternoon";
}else{
    greetings = "GOOD MORNING";
}


document.write(greetings);

/*
var name = "Zhang";
name = 4.5;
name = name + 4;
document.writeln("welcome"+name);
*/