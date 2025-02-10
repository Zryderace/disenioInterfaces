window.onload=function(){
    $('#ofertas').on('click', function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    })
    $('#formulario').on('click', function() {
        var target = $("#ofertas");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    })
}