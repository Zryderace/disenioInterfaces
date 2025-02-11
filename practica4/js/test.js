window.onload = function(){
    console.log("hola fuera")
    $("#cumple").on("click",function(){
        console.log("hola")
        if ($(this).attr("data-estado")=="0") {
            $(".cumple").closest("tr").slideDown(500)
            $(this).attr("data-estado","1")
        } else {
            $(".cumple").closest("tr").slideUp(500)
            $(this).attr("data-estado","0")
        }
    })
    $("#noCumple").on("click",function(){
        console.log("hola")
        if ($(this).attr("data-estado")=="0") {
            $(".noCumple").closest("tr").slideDown(500)
            $(this).attr("data-estado","1")
        } else {
            $(".noCumple").closest("tr").slideUp(500)
            $(this).attr("data-estado","0")
        }
    })
    $("#noProcede").on("click",function(){
        console.log("hola")
        if ($(this).attr("data-estado")=="0") {
            $(".noProcede").closest("tr").slideDown(500)
            $(this).attr("data-estado","1")
        } else {
            $(".noProcede").closest("tr").slideUp(500)
            $(this).attr("data-estado","0")
        }
    })
}