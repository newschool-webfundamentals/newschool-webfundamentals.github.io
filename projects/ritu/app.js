
$(document).ready(function(){
  $("img").on("mouseenter", function(){
    $(this).removeClass("darken");
  });
  $("img").on("mouseleave", function(){
    $(this).addClass("darken");
  });
});
