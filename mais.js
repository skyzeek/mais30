//Cookie
$(function(){
  // 1回目のアクセス
  if($.cookie("access") == undefined) {
    //alert("初回です");
    $.cookie("access","onece");
    $(".mod_message").css("display","block")
  // 2回目以降
  } else {
    //alert("二回目以降です");
  }
});
 
// Message close
$(function() {
  $(".mod_message .close").click(function(){
    $(".mod_message").css("display","none")
  });
