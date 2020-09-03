// Check off specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

//Click on X to delete Todo 
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){    // to access the parent of span
        $(this).remove();                       // remove after trigger & this here means this.parent
    });                                         
    
    event.stopPropagation();                    //to stop from bubbling to other elements
});
// 
$("input[type='text']").on("keypress",function(event){
    if(event.which === 13){
        // grabbing todoTxt from input
        var todoTxt = $(this).val();
        //clear input
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoTxt+"</li>");
    }
});
// for input
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(700);
});