window.onload = function(){

    $("#toggle-nav").on("click", function(){
        $("#offcanvas").show("slide", { direction: "right" }, 500);
    });

    $(".btn-close").on("click", function(){
        $("#offcanvas").hide("slide", { direction: "right" }, 500);
    });
}