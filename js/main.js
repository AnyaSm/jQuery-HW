jQuery(function($){
    $('.dropdown-main').click(function(){
        $('.main-list').slideToggle();
    });

    $('.dropdown-about').hover(function(){
        $('.about-list').slideDown();
    }, function(){
        $('.about-list').slideUp();
    });

    $('.modal-contact').click(function(){
        $('.contact-us, .overlay').fadeIn(1000);
    });

    $('.close, .overlay').click(function(e){
        e.preventDefault();
        $('.contact-us, .overlay').fadeOut(1000);
    });
});
