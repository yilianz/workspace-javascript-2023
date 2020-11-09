/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
  //update the image link
  $("img").each(function(index) {
    console.log(index);
    console.log($(this).attr("src"));
    var remotepath =
      "https://raw.githubusercontent.com/yilianz/workspace-javascript/master/";
    var newpath = remotepath + "img/" + $(this).attr("src");
    $(this).attr("src", newpath);
  });

  $("a").each(function() {
    $(this).css("text-decoration", "line-through");
    $(this).attr("href", "http://www.google.com");
  });
});
