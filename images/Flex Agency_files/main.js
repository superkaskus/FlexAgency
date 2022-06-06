
 $( document ).ready(function() {


 $( "#menu" ).hide();

$( "#hamburger , #close , .paa" ).click(function() { 
        $("#menu").slideToggle();
     
});

$(".slider").click(function() {
    // var toogle =   $(".slider span > svg");
   $(".sliderE ").slideToggle();
$(".slider span > svg").toggleClass("rotate-180"); 
});

// $(".slider-2").click(function() {
//     var toogle =   $(".slider-2 span > svg");
//    $(".sliderE-2 ").slideToggle();
//  toogle.toggleClass("rotate-180") ; 
// });


// $(".slider-3").click(function() {
//     var toogle =   $(".slider-3 span > svg");
//    $(".sliderE-3 ").slideToggle();
//  toogle.toggleClass("rotate-180") ; 
// });

// $(".slider-4").click(function() {
//     var toogle =   $(".slider-4 span > svg");
//    $(".sliderE-4").slideToggle();
//  toogle.toggleClass("rotate-180") ; 
// });

})


