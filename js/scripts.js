$(document).ready(function() {
  $("#n-panda").click(function(){
    $("#elephant").hide();
    $("#lion").hide();
    $("#panda").show();
  });
  $("#n-elephant").click(function(){
    $("#elephant").show();
    $("#lion").hide();
    $("#panda").hide();
  });
  $("#n-lion").click(function(){
    $("#elephant").hide();
    $("#lion").show();
    $("#panda").hide();
  });


  // $("n-elephant").click(function(){
  //   $("#panda").hide();
  // })
});
