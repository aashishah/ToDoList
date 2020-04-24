//check off specific to-dos
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on dustbin icon to delete
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//Append to list on input
$("input[type = 'text']").keypress(function(e){
    if(e.which === 13){
        //grabbing text
        var newTd = $(this).val();
        //appending to list
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTd + "</li");
        //clearing textbox
        $(this).val("");
    }
});