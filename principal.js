class Principal{
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

var principal = new Biblio();
document.getElementById("document").addEventListener("change", uno.cargarArchivo, false);