class Principal{

    mostrarLog(){
        document.getElementById("Login").style.display = "block"
        document.getElementById("prueba1").style.display = "none"
        document.getElementById("tez").style.display = "none"
    }

    ocultarLog(){
        document.getElementById("Login").style.display = "none"
    }

    limpiar2(){
        document.getElementById("botones2").style.display = "none"//desaparecen los botones de carga masiva
        document.getElementById("document2").style.display = "block"//aparece el iniciar sesión de nuevo
    }

    admInicio(){
        var adm = "EDD";
        var contra = "123"
        var nombreAdmin = document.getElementById("usuarioA").value;
        var contraAdmin = document.getElementById("passwordA").value;
        var check = document.getElementById("check").checked;
        //validando credenciales
        if(check == true){
            if(nombreAdmin == adm && contra == contraAdmin){
                alert("bienvenido administrador!")
                this.ocultarLog();
                this.paginaAdmin();//aquí se irá a la página del administrador
            }else{
                alert("Credenciales incorrectas")
            }
        }else{
            console.log("Aquí debería ir a la página del cliente")
        }
    }

    
    paginaAdmin(){//ocultando y mostrando cosas para el admin
        document.getElementById("document2").style.display = "none"
        document.getElementById("botones2").style.display = "block"//se mostrarán los botones para cargar archivos
        document.getElementById("caja").style.display = "block"
        document.getElementById("cajaE").style.display = "block"
        //document.getElementById("document2").style.display = "block"
    }

    cargarArchivo(x){//Cargando libros
        var documento = x.target.files[0];
        if (!documento) {
            return;
        }
        let lectura = new FileReader();
        lectura.onload = function(x) {
            let contenido = x.target.result;
            const object = JSON.parse(contenido);
            for (const key in object) {
                let libros = object[key];
                console.log("----------------------------------------------")
                //console.log("fila: " +  + " columna: "+  +" tres: " + )
                if( libros.categoria == "Fantasia"){
                    Biblio.mat1.insertOrtogonal(dos, uno, tres);
                }
                if( libros.categoria == "Thriller"){
                    Biblio.mat2.insertDispersa(dos, uno, tres);
                }
                console.log(libros.isbn + " " + libros.nombre_autor + " " + libros.nombre_libro + " " + libros.cantidad + " " + libros.fila + " " + libros.columna + " " + libros.paginas + " " + libros.categoria)
            }
            grafoMatrizUno();
        }
        lectura.readAsText(documento);
    }
}

var principal = new Principal();
document.getElementById("document").addEventListener("change", principal.cargarArchivo, false);