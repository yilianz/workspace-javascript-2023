/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var hotel = {
  name: "ddd",
  room: 40,
  booked: 25,
  display: function() {
    return this.name;
  }
};

//alert(hotel.display());
//alert(typeof hotel.name);

var guestGroup = new Array();
$(function() {
  $("#submit").click(reservation);
  $("#lists").click(displayR);
});

function reservation() {
  //collect the form information;
  var guest = {
    name: $("#name").val(),
    numberofGuest: $("#num").val(),
    checkin: $("#checkin").val(),
    checkout: $("#checkout").val(),
    room: $("#room").val(),
    display: function() {
      var result =
        this.name +
        "  reserved " +
        this.room +
        " from " +
        this.checkin +
        " to " +
        this.checkout;
      return result;
    }
  };

  guestGroup.push(guest);
  console.log(guest.display());
  $("p:first").html("Thank you for your reservation! " + guest.display());
}

function displayR() {
  if ($("table").length) {
    $("table").remove();
  }
  $("form").append("<table>");
  for (var i in guestGroup) {
    var guest = guestGroup[i];
    var thisrow = $(
      "<tr>" +
        "<td>" +
        guest.name +
        "</td>" +
        "<td>" +
        guest.checkin +
        "</td>" +
        "<td>" +
        guest.checkout +
        "</td>" +
        "<td>" +
        guest.room +
        "</td>" +
        "</tr>"
    );
    $("table").append(thisrow);
  }
}
