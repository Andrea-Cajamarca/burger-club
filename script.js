/*global $ */
$(document).ready(function() {
    var email = $("input:text").val();
    var name = $("input:text").val();
    $("#myModal").click(function() {
        //work on this later
         alert("Hi " + name + ". Thank you for signing up! We will send an email to"  + email + " shortly!");    
    });
});

$(".social_img").hover(function() {
        $(this).animate({
            paddingTop: "15px"
        }, 100);
    }, function() {
        $(this).animate({
            paddingTop: "10px"
        }, 100);
        
    });
