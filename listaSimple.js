//var dotstring = "digraph G{ a -> b -> c}"
//d3.select("#cuadro1").graphviz()
//    .width(900)
//    .height(500)
//    .renderDot(dotstring)

class Nodo {//Clase nodo de mi lista simple
    constructor(dato, nombre_completo, nombre_usuario, correo, contrasenia,telefono, next){
        this.dato = dato;// est3e será el dpi
        this.nombre_completo = nombre_completo;
        this.nombre_usuario = nombre_usuario;
        this.correo = correo;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
        this.next = next;
    };
};

class listaSimple {//clase lista, que contendrá mis métodos
    constructor(){
        this.cabeza = null;
        this.tam = 0;
    };

    //------Method of add data from the list
    addData(dato, nombre_completo, nombre_usuario, correo, contrasenia,telefono){
        const newNodo = new Nodo(dato, nombre_completo, nombre_usuario, correo, contrasenia, telefono, null);
        if(!this.cabeza){//if head of my list is null(try this.cabeza==null)
            this.cabeza = newNodo
        }else{
            let actual = this.cabeza;
            while(actual.next){//Mientras haya referencia al siguiente nodo
                actual = actual.next;//the current one will be equal to the following one
            };
            actual.next = newNodo;
        };
        this.tam++;
    };

    //------Method for displaying list data
//    showData(){
//            if(this.tam == 0){
//                return null
//           };
//            let actual = this.cabeza;
//            let aux = '';
//            while(actual){
//                aux += actual.dato += ' -> ';
//                actual = actual.next;
//            };
//            aux += 'x';
//            return aux;
//    }

    //------Method of add data from the list to a specific location
    addDataLocation(dato, nombre_completo, nombre_usuario, correo, contrasenia,telefono, location){
        if(location < 0 || location > this.tam){//if location is not in the list
            return null
        };
        
        const newNodo = new Nodo(dato, nombre_completo, nombre_usuario, correo, contrasenia,telefono);
        let actual = this.cabeza;
        let ant;

        if(location == 0){
            newNodo = actual;//the new node will point to the head current
            this.cabeza = newNodo; // the current head is equal to the new node
        } else{
            for(let i = 0; i < location; i++){
                ant = actual;
                actual = actual.next;
            };
            newNodo.next = actual;
            ant.next = newNodo;
        };
        this.tam++;
    };

    //------Method of delete data from the list
    deleteData(dato, nombre_completo, nombre_usuario, correo, contrasenia,telefono){
        let actual = this.cabeza;
        let ant = null;
        while(actual != null){
            if(actual.dato == dato){//si encontramos la info que queremos eliminar
                if(!ant){//si no existe un valor anterior la cabeza es el primer valor de la lista
                    this.cabeza = actual.next; //la cabeza será el siguiente
                }else{
                    ant.next = actual.next;
                };
                this.tam--;
                return actual.dato;
            };
            ant = actual;
            actual = actual.next;
        };
        return null;
    };
    //metodo para poder buscar datos através de la lista
    existe(nombreAdmin, contraAdmin){
        let actual = this.cabeza;
        //let ant = null;
        while(actual != null){
            if(actual.nombre_usuario == nombreAdmin && actual.contrasenia == contraAdmin){//si encontramos la info que queremos eliminar
                return true;
            };
            actual = actual.next;
        };
        return false;
    };

    //------Method of delete data from the list to a specific location
    deletIndex(location){
        if(location < 0 || location > this.tam){//si no está dentro del rango de la lista
            return null;
        };
        let actual = this.cabeza;
        let ant = null;
        if(location == 0){
            this.cabeza = actual.next;
        }else{
            for(let i=0; i< location; i++){
                ant = actual;
                actual = actual.next;
            };
            ant.next = actual.next;
        };
        this.tam--;
        return actual.dato;
    };


    getTam(){
        return this.tam;
    };

    esVacia(){
        //return this.size == 0;
        if(this.tam == 0){
            return true;
        }else{
            return false;
        };
    };

    grafo(){
        var codigodot = "digraph G{\nlabel=\" Sharon \";\nnode [shape=box];\n";
        var tem = this.cabeza;
        var conex = "";
        var nodos = "";
        var num = 0;
        while(tem != null){
            nodos += "N" + num + "[label=\"" + tem.nombre_completo + "\" ];\n"
            if(tem.next != null){
                var auxnum = num+1;
                conex += "N" + num + " -> N" +  auxnum + ";\n";
            }
            tem = tem.next;
            num ++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregado conexiones o flechas\n"
        codigodot += "{rank=same;\n" + conex + "\n}\n}"
        console.log(codigodot);
        //document.write(codigodot)
        this.generarImagen(codigodot);


    }


    generarImagen(codigodot){
        d3.select("#caja")
            .graphviz()
            .zoom(false)
            .fit(true)
            .renderDot(codigodot)
            //.width(3000)
            //.height(1500)
            //.renderDot(codigodot)
    }
};

/* MODIFICADO ACAAA
const lista = new listaSimple();
console.log(lista);//Para ver cómo está la lista

lista.addData(12);
lista.addData(67);
lista.addData(22);
lista.addData(65);

lista.addDataLocation(13, 1);
console.log(lista);

console.log('aquí');
//----console.log(lista.showData());

//lista.deleteData(22);
//console.log(lista.showData());
//console.log(lista.showData());
console.log('aquí2');
console.log(lista.deletIndex(1));
//----console.log(lista.showData());

console.log(lista.getTam());//obtener el tamaño de la lista
console.log(lista.esVacia());//obtener si la lista está vacía o no

lista.grafo();
//------------toca vídeo 12s*/