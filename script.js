
/* <!-- Work around stackblitz does not support  static images -->
Add the image path to all images
https://raw.githubusercontent.com/yilianz/workspace-javascript/master/
*/
$('img').each(function(){
    var localpath = $(this).attr('src');
    var remotepath = "https://raw.githubusercontent.com/yilianz/workspace-javascript/master/" +localpath;
    $(this).attr('src',remotepath);
});