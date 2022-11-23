//JQUERY PART TO LOAD THE LOGIN MENU
$(document).ready(() => {

    $('#loginMenu').hide()
    
$('#login').click(() => 
{
    $('#loginMenu').slideToggle()
});   
 
});


  
//OWL CAROUSEL PICTURE GALLERY
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
