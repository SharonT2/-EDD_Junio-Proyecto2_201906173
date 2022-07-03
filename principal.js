class Principal{
    static estruct1
    static estruct2
    static estruct3
    //static estruct3x
    static estruct4
    mostrarLog(){
        document.getElementById("titulo").style.display = "block"//se mostrarán los botones para cargar archivos
        //document.getElementById("homeb").style.display = "block"//se mostrarán los botones para cargar archivos
        document.getElementById("document2").style.display = "none"
        document.getElementById("botones2").style.display = "none"//se mostrarán los botones para cargar archivos
        document.getElementById("caja").style.display = "none"
        document.getElementById("Login").style.display = "block"
        document.getElementById("prueba1").style.display = "none"
        //document.getElementById("tez").style.display = "none"
        document.getElementById("descargarP").style.display = "none"//descargar
        document.getElementById("cambio1").style.display = "none"
        document.getElementById("cambio2").style.display = "none"
        document.getElementById("cambio3").style.display = "none"
        document.getElementById("cambio4").style.display = "none"
        document.getElementById("textoOrdenamientos").style.display = "none"//textoOrdenamientos
        document.getElementById("ActoresInorden").style.display = "none"
        document.getElementById("ActoresPreorden").style.display = "none"
        document.getElementById("ActoresPostorden").style.display = "none"
        document.getElementById("ascendente").style.display = "none"//se mostrarán los botones para cargar archivos
        document.getElementById("descendente").style.display = "none"
        document.getElementById("pelicula").style.display = "none"//pelicula
    }

    ocultarLog(){
        document.getElementById("Login").style.display = "none"
    }

    limpiar2(){//titulo
        document.getElementById("botones2").style.display = "none"//desaparecen los botones de carga masiva
        document.getElementById("document2").style.display = "none"//aparece el iniciar sesión de nuevo
    }

    admInicio(){
        var adm = "EDD";
        var contra = "123"
        var nombreAdmin = document.getElementById("usuarioA").value;
        var contraAdmin = document.getElementById("passwordA").value;
        var check = document.getElementById("check").checked;
        //validando credenciales
        if(check == true){//si marca el admin se irá a la página del administrador
            if(nombreAdmin == adm && contra == contraAdmin){
                alert("bienvenido administrador!")
                this.ocultarLog();
                this.paginaAdmin();//aquí se irá a la página del administrador
            }else{
                alert("Credenciales incorrectas")
            }
        }else{//sino se irá a la página del usuario
            //console.log("hola cliente   " + Principal.estruct2.existe())
           //    Principal.cargarArchivo2Clientes.estruct2.existe()
            //Principal.cargarArchivo2Clientes(true)
            var ver =  Principal.estruct2.existe(nombreAdmin, contraAdmin);
            //var ver = true;
            if(ver == true){
                alert("bienvenido cliente!")
                this.ocultarLog();
                this.paginaCliente();
            }else{
                alert("Credenciales incorrectas")
            }
            //console.log("Aquí debería ir a la página del cliente")
        }
    }

    
    paginaAdmin(){//ocultando y mostrando cosas para el admin
        
        //document.getElementById("titulo").style.display = "block"//se mostrarán los botones para cargar archivos
        //document.getElementById("homeb").style.display = "none"//se mostrarán los botones para cargar archivos

        document.getElementById("botones2").style.display = "block"//se mostrarán los botones para cargar archivos
        document.getElementById("document2").style.display = "block"
        //document.getElementById("descargar").style.display = "block"//descargar
        document.getElementById("caja").style.display = "block"
        document.getElementById("descargarP").style.display = "block"
        document.getElementById("cambio1").style.display = "block"
        document.getElementById("cambio2").style.display = "block"
        document.getElementById("cambio3").style.display = "block"
        document.getElementById("cambio4").style.display = "block"
        document.getElementById("textoOrdenamientos").style.display = "none"//textoOrdenamientos
        //document.getElementById("cajaE").style.display = "block"
        //document.getElementById("document2").style.display = "block"
        document.getElementById("ActoresInorden").style.display = "none"
        document.getElementById("ActoresPreorden").style.display = "none"
        document.getElementById("ActoresPostorden").style.display = "none"
        document.getElementById("pelicula").style.display = "none"//pelicula

    }
    paginaCliente(){//ocultando y mostrando cosas para el admin
        document.getElementById("ascendente").style.display = "block"//se mostrarán los botones para cargar archivos
        document.getElementById("descendente").style.display = "block"
        document.getElementById("textoOrdenamientos").style.display = "block"//textoOrdenamientos
        document.getElementById("ActoresInorden").style.display = "block"
        document.getElementById("ActoresPreorden").style.display = "block"
        document.getElementById("ActoresPostorden").style.display = "block"
        document.getElementById("document2").style.display = "block"
        document.getElementById("pelicula").style.display = "block"//pelicula

        //document2
    }

    cargarArchivo1Pelis(x){//Cargando peliculas
        Principal.estruct1 = new treeAVL();
        var documento = x.target.files[0];
        if (!documento) {
            return;
        }
        let lectura = new FileReader();
        lectura.onload = function(x) {
            let contenido = x.target.result;
            const object = JSON.parse(contenido);
            for (const key in object) {
                let peliculas = object[key];
                console.log("----------------------------------------------")
                console.log(peliculas.id_pelicula + " " + peliculas.nombre_pelicula + " " + peliculas.descripcion + " " + peliculas.puntuacion_star + " " + peliculas.precio_Q)
                Principal.estruct1.root = Principal.estruct1.insert(Principal.estruct1.root, peliculas.id_pelicula, peliculas.nombre_pelicula, peliculas.descripcion, peliculas.puntuacion_star, peliculas.precio_Q);
            }                                                       //valor, nombre_pelicula, descripcion, puntuacion_star, precio_Q
            grafoAvlUno();
            oreden();
        }
        lectura.readAsText(documento);
    }
    cargarArchivo2Clientes(x){//Cargando clientes
        console.log("3·····")
        /*const lista = new listaSimple();
        console.log(lista);//Para ver cómo está la lista

        lista.addData(12);*/
        
            Principal.estruct2 = new listaSimple();//cambiar
            var documento = x.target.files[0];
            if (!documento) {
                return;
            }
            let lectura = new FileReader();
            lectura.onload = function(x) {
                let contenido = x.target.result;
                const object = JSON.parse(contenido);
                for (const key in object) {
                    let clientes = object[key];
                    console.log("----------------------------------------------")
                    console.log(clientes.dpi  + " " + clientes.nombre_completo  + " " + clientes.nombre_usuario  + " " + clientes.correo  + " " + clientes.contrasenia  + " " + clientes.telefono);
                    Principal.estruct2.addData(clientes.dpi, clientes.nombre_completo, clientes.nombre_usuario, clientes.correo, clientes.contrasenia, clientes.telefono);
                }
                grafoListaDos();
            }
            lectura.readAsText(documento);
    }


    cargarArchivo3Actores(x){//Cargando actores
        Principal.estruct3 = new NodoTreeBB();//cambiar
        var documento = x.target.files[0];
        if (!documento) {
            return;
        }
        let lectura = new FileReader();
        lectura.onload = function(x) {
            let contenido = x.target.result;
            const object = JSON.parse(contenido);
            for (const key in object) {
                let actores = object[key];
                console.log("-------------------------------------------------------------------------------------------")
                console.log(actores.dni  + " " + actores.nombre_actor  + " " + actores.correo  + " " + actores.descripcion);
                Principal.estruct3.insertDataNTree(actores.dni, actores.nombre_actor, actores.correo, actores.descripcion);
            }
            grafoBinarioTres();
        }
        lectura.readAsText(documento);
    }

    cargarArchivo4Categorias(x){//Cargando categorías
        Principal.estruct4 = new ListaCir();//cambiar
        for(var i = 0; i<20; i++){//llenando la tabla hash, las cabeceras
            Principal.estruct4.insertarUs(i);
        }
        var documento = x.target.files[0];
        if (!documento) {
            return;
        }
        let lectura = new FileReader();
        lectura.onload = function(x) {
            let contenido = x.target.result;
            const object = JSON.parse(contenido);
            for (const key in object) {
                let categorias = object[key];
                console.log("-------------------------------------------------------------------------------------------")
                console.log(categorias.id_categoria  + " " + categorias.company);
                Principal.estruct4.insertarPrincipal(categorias.id_categoria, categorias.company);
            }
            grafoTabla();
        }
        lectura.readAsText(documento);
    }

    descargarImg(){
        descargarImg();
    }

    grafo1(){
        grafoAvlUno();
    }
    
    grafo2(){
        grafoListaDos();
    }
    
    grafo3(){
        grafoBinarioTres();
    }

    grafo4(){
        grafoTabla();
    }

    ordenAsc(){
        const aux = document.querySelector("#textoOrdenamientos");
        aux.innerHTML = "";
        Principal.estruct1.OrdenAsc(Principal.estruct1.root, "#textoOrdenamientos");
    }
    
    ordenDesc(){
        const aux = document.querySelector("#textoOrdenamientos");
        aux.innerHTML = "";
        Principal.estruct1.OrdenDesc(Principal.estruct1.root, "#textoOrdenamientos");
    }
    sinOrden(){
        const aux = document.querySelector("#textoOrdenamientos");
        aux.innerHTML = "";
        Principal.estruct1.SinOrden(Principal.estruct1.root, "#textoOrdenamientos");
    }

    actoresInorden(){
        const aux = document.querySelector("#textoOrdenamientos");
        aux.innerHTML = "";
        Principal.estruct3.ActoresInorden(Principal.estruct3, "#textoOrdenamientos");
    }
    
    actoresPreorden(){
        const aux = document.querySelector("#textoOrdenamientos");
        aux.innerHTML = "";
        Principal.estruct3.ActoresPreorden(Principal.estruct3, "#textoOrdenamientos");
    }
    actoresPostorden(){
        const aux = document.querySelector("#textoOrdenamientos");
        aux.innerHTML = "";
        Principal.estruct3.ActoresPostorden(Principal.estruct3, "#textoOrdenamientos");
    }
    
    comentar(idPeli){
        Principal.estruct1
        .buscarA(Principal.estruct1.root, idPeli)
        .comments.push(document.querySelector(`#comments-${idPeli}`).value);
        const aux = document.querySelector("#textoOrdenamientos");
        aux.innerHTML = "";
        Principal.estruct1.OrdenAsc(Principal.estruct1.root, "#textoOrdenamientos");
    }

    buscar(){
        console.log("entra")
        console.log(Principal.estruct1.buscarA(Principal.estruct1.root, 9833425323037));
    }
}

function grafoAvlUno(){
    //console.log("Holaaaaaaaaa")
    //Biblio.mat.graficarMatriz(); treeS.graphTree(treeS.root);
    Principal.estruct1.graphTree(Principal.estruct1.root);
}

function grafoListaDos(){
    //console.log("Holaaaaaaaaa")
    //Biblio.mat.graficarMatriz(); treeS.graphTree(treeS.root);
    Principal.estruct2.grafo()
    console.log("------------------" + Principal.estruct2.existe())
}

function grafoBinarioTres(){
    //console.log("Holaaaaaaaaa")
    //Biblio.mat.graficarMatriz(); treeS.graphTree(treeS.root);
    Principal.estruct3.graphTree()
}


function grafoTabla(){
    //console.log("Holaaaaaaaaa")
    //Biblio.mat.graficarMatriz(); treeS.graphTree(treeS.root);
    Principal.estruct4.graficarCir();
}

function descargarImagen() {//////////7VEEEEEEEEEEEER LO DE DESCARGAR IMAGEN CUANDO ELIMINO EL TREE AVL AHÍ SÍ
    html2canvas($('#Login')[0]).then(function (canvas) {
        return Canvas2Image.saveAsPNG(canvas);
        $(".response").append(canvas);
    });
}

function existencia() {
    console.log(Principal.estruct2.existe())
}


function oreden(){
    Principal.estruct1.pOrden(Principal.estruct1.root);
}

var principal = new Principal();
document.getElementById("document").addEventListener("change", principal.cargarArchivo1Pelis, false);
document.getElementById("carga2").addEventListener("change", principal.cargarArchivo2Clientes, false);
document.getElementById("carga3").addEventListener("change", principal.cargarArchivo3Actores, false);
document.getElementById("carga4").addEventListener("change", principal.cargarArchivo4Categorias, false);

//document.getElementById("carga2").addEventListener("change", uno.cargarArchivo2, false);
//document.getElementById("carga3").addEventListener("change", uno.cargarArchivo3, false);
//document.getElementById("carga4").addEventListener("change", uno.cargarArchivo, false);

// const uno = document.querySelector("#ascendente")

// uno.addEventListener("click", () =>{
//     const aux = document.querySelector("#textoOrdenamientos");
//     aux.innerHTML = "";
//     Principal.estruct1.OrdenAsc(Principal.estruct1.root, "#textoOrdenamientos");
// })