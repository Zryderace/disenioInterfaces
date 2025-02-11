window.onload=function(){
    $('#ofertas').on('click', function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
        $("#oculto").css("display","block")
    })
    $('#formulario button').on('click', function() {
        var target = $("#ofertas");
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
    $("img").on("mouseenter",function(){
        $(this).css({"transform":"scale(1.1)",
                    "border": "5px solid black",
                    "transition":"transform 0.3 ease"})
    })
    $("img").on("mouseleave",function(){
        $(this).css({"transform":"scale(1)",
                    "border": "0px",
                    "transition":"transform 0.3 ease"})
    })

    var paisCodigo = {  "espana":"+34",
                        "canada":"+1",
                        "mexico":"+52",
                        "eeuu":"+1"
    }

    $("#pais").on("change", function(){
        let seleccionado = $(this).val()

        $("#prefijo").val(paisCodigo[seleccionado])

    })


}