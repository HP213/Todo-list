var check = true;
$("ul").on("click", "li", function(){
  $(this).toggleClass("contained");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(400, function(){
    $(this).remove();
  });
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  if(check===true)
  {
    $("input[type='text']").fadeOut(500);
    check =false;
  }
  else if(check===false)
  {
    $("input[type='text']").fadeIn(500);
    check =true;
  }
});
