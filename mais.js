//Cookie
$(function(){
  // 1回目のアクセス
  if($.cookie("access") == undefined) {
    alert("このアプリはmais30です\nまずこのページは”録音”です。\nその隣がクイズ、説明、概要となっています。\n説明は、楽譜の読み方やリコーダーの指などです。\n概要は、このアプリのことが書いてあるので是非見てください")
    $.cookie("access","onece");
    $(".mod_message").css("display","block")
  // 2回目以降
  } else {
    alert("二回目以降のご利用ありがとうございます");
  }
});
 
// Message close
$(function() {
  $(".mod_message .close").click(function(){
  });
