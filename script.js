
/* <!-- Work around stackblitz does not support  static images -->
Add the image path to all images
https://raw.githubusercontent.com/yilianz/workspace-javascript/master/

$('img').each(function(){
    var localpath = $(this).attr('src');
    var remotepath = "https://raw.githubusercontent.com/yilianz/workspace-javascript/master/" +localpath;
    $(this).attr('src',remotepath);
});

*/
$(function(){
    $('div.practice').hide();
    $('div.practice h1').each(function(){
        var content = $(this).text();
        $('.panelLeft').append("<h1>"+content+"</h1");    
    });

    $('.panelLeft h1').click(function(){
        var index = $(this).index();
        $('div.practice').hide();
        $('div.practice').eq(index).fadeIn(2000);
    }); 

});



