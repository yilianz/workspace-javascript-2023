// This example has been updated to fire on the keyup event instead of keypress
// (on the last line in the event listener) as new text is not in the textarea until the key is released

// Javascript Way
var el; // Declare variables

function charCount(e) {
  // Declare function
  var textEntered, charDisplay, counter, lastkey; // Declare variables
  textEntered = document.getElementById("message").value; // User's text
  charDisplay = document.getElementById("charactersLeft"); // Counter element
  counter = 180 - textEntered.length; // Num of chars left
  charDisplay.textContent = counter; // Show chars left
  lastkey = document.getElementById("lastKey"); // Get last key elem
  lastkey.textContent = "Last key in ASCII code: " + e.keyCode; // Create msg
}
el = document.getElementById("message"); // Get msg element
el.addEventListener("keyup", charCount, false); // on keyup - call charCount()

var posX = 100;
var posY = 10; //
document.addEventListener("mousemove", showit);
document.addEventListener("keydown", moveit);
function showit(e) {
  lastkey = document.getElementById("lastKey");
  lastkey.textContent = "mouse is at position " + e.pageX + "  " + e.pageY;
}
function showkey(e) {
  lastkey = document.getElementById("lastKey");
  lastkey.textContent = e.key;
}

setInterval(function() {
  //check collision
  var p = $("img").css("left");
  $("#lastKey").text(p);
}, 100);

function moveit(e) {
  var IE = document.querySelector("img");
  if (e.key == "ArrowUp") {
    posX--;
    IE.setAttribute("style", "top: " + posX + "px");
  }
  if (e.key == "ArrowDown") {
    posX++;
    $("img").css("top", posX + "px");
  }
  if (e.key == "s") {
    //shoot itself
    $("img").animate(
      {
        left: "400px"
      },
      3000,
      "linear"
    );
  }
}
/*
//$(".panelLeft").hide();
//$(".panelRight").hide();

$("#message").keyup(function(e) {
  $("#lastKey").text("Last key in ASCII code: " + e.keyCode);
});

/*$(document).mousemove(function(e){
    var t = $(document).width();
    $('#lastKey').text('mouse is at position ' + e.pageX+"  "+e.pageY ); 
    
      if (e.pageX<t*0.2){
          $('.panelLeft').fadeIn(100);
      }
      else{
           $('.panelLeft').hide();
      }
    
});



*/
