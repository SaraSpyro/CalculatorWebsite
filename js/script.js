$(document).ready(function(){
    $(".button").click(function(){
		$("#output").append($(this).attr("value"));   
    })
    $(".equals").click(function(){
        $("#output").html(eval($("#output").html()));
    })
    $(".allClear").click(function(){
        $("#output").empty();
    });
})


