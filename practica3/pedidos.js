window.onload = function () {

    //codigo ejecutado cuando carga DOM
    //agregar variables globales

    var productos = [
        { id: 1, producto: "balonFutbol", precio: 10, imagen: "1.jpg", estado: "pendiente", telefono: "123456789" },
        { id: 2, producto: "bicicleta", precio: 20, imagen: "2.jpg", estado: "pendiente", telefono: "123456789" },
        { id: 3, producto: "bolasGolf", precio: 30, imagen: "3.jpg", estado: "pendiente", telefono: "123456789" },
        { id: 4, producto: "clasesGolf", precio: 40, imagen: "4.jpg", estado: "atendido", telefono: "123456789" },
        { id: 5, producto: "flotador", precio: 50, imagen: "5.jpg", estado: "atendido", telefono: "123456789" },
        { id: 6, producto: "clasesNatacion", precio: 60, imagen: "6.jpg", estado: "atendido", telefono: "123456789" },
    ]

    productos.forEach(function (item) {

        var tablaObjetivo = item.estado

        if (item.estado === "pendiente") {
            tablaObjetivo = $("#pendiente")
        } else {
            tablaObjetivo = $("#atendido")
        }

        tablaObjetivo.find(".column").eq(0).append('<div class="grid-item">' + item.id + '</div>');
        tablaObjetivo.find(".column").eq(1).append('<div class="grid-item">' + item.producto + '</div>');
        tablaObjetivo.find(".column").eq(2).append('<div class="grid-item">' + item.precio + '</div>');
        tablaObjetivo.find(".column").eq(3).append('<div class="grid-item"><img src="' + item.imagen + '"></div>');
        tablaObjetivo.find(".column").eq(4).append('<div class="grid-item">' + item.estado + '</div>');
        tablaObjetivo.find(".column").eq(5).append('<div class="grid-item">' + item.telefono + '</div>');
        tablaObjetivo.find(".column").eq(6).append('<div class="grid-item"><a>Ver<span class="material-icons">search</span></a> <a class="borrar" data-id="' + item.id + '">Borrar<span class="material-icons">delete_forever</span></a> <a class="cambiar">Cambiar<span class="material-icons">edit</span></a></div>');
    })



    $("#cajaTextoPendiente").click(function () {
        $("#cajaTextoPendiente").val("");
    });

    $("#cajaTextoPendiente").on("blur", function () {
        $("#cajaTextoPendiente").val("Buscar por ID")
        //enseñar todas, por si aca
        $("#pendiente .column .grid-item").show()
    })

    $("#cajaTextoPendiente").on("input", function () {
        let id = $(this).val().trim()
        //si esta vacio, mustra todo de nuevo
        if (id === "") {
            $("#pendiente .column .grid-item").show()
            return
        }
        // console.log(id)
        $("#pendiente .column .grid-item").each(function (index) {
            //itera todas las filas, si coincide, muestra la fila, si no la esconde
            //si la esconde, se asegura que la primera que tiene todos los nombres
            //siempre se muestra
            if ($(this).text() === id) {
                // console.log("fila: " + index)
                //cada columna en la tabla es iterada
                $("#pendiente .column").each(function () {
                    //borra el objeto en la fila seleccionada
                    $(this).find(".grid-item").eq(index).show()
                })
            } else {
                $("#pendiente .column").each(function () {
                    $(this).find(".grid-item").eq(index).hide()
                    $(this).find(".grid-item").eq(0).show()
                })
            }
        })
    })

    $("#cajaTextoAtendido").click(function () {
        $("#cajaTextoAtendido").val("");
    });

    $("#cajaTextoAtendido").on("blur", function () {
        $("#cajaTextoAtendido").val("Buscar por ID")
    })

    $("#cajaTextoAtendido").on("input", function () {
        let id = $(this).val().trim()
        //si esta vacio, mustra todo de nuevo
        if (id === "") {
            $("#atendido .column .grid-item").show()
            return
        }
        // console.log(id)
        $("#atendido .column .grid-item").each(function (index) {
            //itera todas las filas, si coincide, muestra la fila, si no la esconde
            //si la esconde, se asegura que la primera que tiene todos los nombres
            //siempre se muestra
            if ($(this).text() === id) {
                // console.log("fila: " + index)
                //cada columna en la tabla es iterada
                $("#atendido .column").each(function () {
                    //oculta el objeto en la fila seleccionada
                    $(this).find(".grid-item").eq(index).show()
                })
            } else {
                $("#atendido .column").each(function () {
                    $(this).find(".grid-item").eq(index).hide()
                    $(this).find(".grid-item").eq(0).show()
                })
            }
        })
    })

    $("#pendiente").on("click", ".borrar", function(){
        //distintos para que no borre de tablas distintas
        //esto recoje el item entero, index recoje la position relativa
        //con sus hermanos
        let idFila = $(this).closest(".grid-item").index()
        $("#pendiente .column").each(function(){
            //recorre cada item de cada fila y lo borra
            $(this).find(".grid-item").eq(idFila).remove()
        })
    })
    $("#atendido").on("click", ".borrar", function(){
        let idFila = $(this).closest(".grid-item").index()
        $("#atendido .column").each(function(){
            $(this).find(".grid-item").eq(idFila).remove()
        })
    })

    $("#pendiente").on("click", ".cambiar", function(){
        //recoje la fila
        let idFila = $(this).closest(".grid-item").index()
        $("#pendiente .column").each(function(idColumna){
            //por cada columna, sabiendo la fila, recoje la celda
            //y la pega en la otra tabla
            //cambiar el texto de la fil de uno a otro
            let celda = $(this).find(".grid-item").eq(idFila)
            if(idColumna===4){
                celda.text("atendido")
            }
            $("#atendido .column").eq(idColumna).append(celda)
        })
    })

    $("#atendido").on("click", ".cambiar", function(){
        let idFila = $(this).closest(".grid-item").index()
        $("#atendido .column").each(function(idColumna){
            let celda = $(this).find(".grid-item").eq(idFila)
            if(idColumna===4){
                celda.text("pendiente")
            }
            $("#pendiente .column").eq(idColumna).append(celda)
        })
    })

    $("#archivarPendiente").click(function(){
        //elige todas las columnas de pendiente
        $("#pendiente .column").each(function() {
            //recorre todas las filas, si es la primera, no la borra
            $(this).find(".grid-item").each(function(index){
                if (index!== 0){
                    $(this).remove()
                }
            })
        })
    })

    $("#archivarAtendido").click(function(){
        $("#atendido .column").each(function() {
            $(this).find(".grid-item").each(function(index){
                if (index!== 0){
                    $(this).remove()
                }
            })
        })
    })

    $("#estilo").click(function(){
        document.body.classList.toggle("temaOscuro")
        //TODO CAMBIAR LOGO
        let logo = document.querySelector(".logo img")
    })

}