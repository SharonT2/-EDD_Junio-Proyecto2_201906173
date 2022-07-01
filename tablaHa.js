//alert("CAMBIOOOOOOOOOOOOOOOOOOOOOOOSHARON")
class NodoSimpleCir{//Para la listita(Sublista)
    
    constructor(libro){
        this.libro = libro;
        this.next = null;
    }
}

class NodoCir{//Nodo de la lista principal, osea la circular
    constructor(cliente){
        this.cliente = cliente;
        this.next = null;
        this.pre = null;
        this.down = null;
    }
}

class ListaCir{//Clase de la lista principal, la ciruular
    static contU = 0
    constructor(){
        this.first = null;
        this.last = null;
    }

    insertarREVISAR(cliente){
        var nuevo = new NodoCir(cliente);
        nuevo.cliente = cliente;
        if(this.first == null){
            this.first = nuevo;
            this.first.next = this.first;
            this.first.pre = this.last;
            this.last = nuevo;
        }else{
            this.last.next = nuevo;
            nuevo.next = this.first;
            this.last = nuevo;
            this.first.pre = this.last;
        }
    }

    insertarUs(cliente){//para el proyecto serán 30(0-29)
        var nuevo = new NodoCir(cliente);
        //nuevo.dato = dato;
        if(this.first == null){
            this.first = nuevo;
            this.last = nuevo;
            this.first.next = this.first;
            this.first.pre = this.last;
        }else{
            var aux = this.first;
            while(this.first.next!=aux){
                this.first=this.first.next;
            }
            this.last=nuevo;
            this.first.next=this.last;
            this.last.pre = this.first;
            this.first=aux;
            this.last.next=this.first;
            this.first.pre=this.last;
        }
    }

    insertarPrincipal(dato){
        console.log("-------------------------------")
        var coor = dato%30;
        //var ultimoCaracter = coor.charAt(coor.length - 1)
        var ultimoCaracter;
        coor = coor.toString()
        ultimoCaracter = coor.charAt(coor.length - 1)
        //ultimoCaracter = ultimoCaracter.toString()
        console.log("·########")
        console.log("ultimoaaaaaaa " + ultimoCaracter)
            //var coor2 = "123"
        console.log("Valor booleano")
        console.log(this.verRepetido(ultimoCaracter, dato))//le mandaré coordenada(que será la cabeza)
        //console.log(this.verRepetido(dato, coor))
        if(this.verRepetido(ultimoCaracter, dato) == false){
            //convirtiendo a string para que mande el último caracter
            //var ultimoCaracter = coor.charAt(coor.length - 1);
            //console.log(">holaaaaaaaaaaaaaaaaaaaa ultimo caracter " + ultimoCaracter) PARA IMPRIMIR EL ULTIMO CARACTER
            //console.log(ultimoCaracter)
            this.insertarLibroCir(ultimoCaracter, dato)//el ultimo caracter hace referencia a la coordenada, y el dato al dato qu3e se presentará en el nodo
        }else{
            console.log("este dato ya se insertó en la tabla hash")
        }
    }


    verRepetido(cabeza, dato){//ssublista de la circular el cabeza será la cabeza
        var aux = this.first
        var confir = false
        var existencia = false
        //console.log("''?????????????????????????????????111111")
        do {
            //console.log("''?????????????????????????????????22222")
            //console.log(aux.cliente + " --" + cabeza) //para poder comparar los datos
            if(aux.cliente == cabeza){
                //console.log("''???????????????????????????????333333")
                confir = true
                //console.log("****** cabeza " + cabeza + "*****")
                var auxLibro = aux.down
                while(auxLibro != null){
                    console.log(auxLibro.libro)
                    if(dato == auxLibro.libro){
                        existencia = true;
                        return existencia
                    }
                    auxLibro = auxLibro.next;      
                }
                return existencia
            }
            aux = aux.next
        }while(aux != this.first)
        if(cabeza == null || confir == false){
            console.log("No se encontró el cabeza en la lista")
            return existencia
        }
    }

    insertarLibroCir(cliente, libro){

        var auxCliente = this.first
        var confir = false
        do{
            if(auxCliente.cliente == cliente){
                console.log("Se encontró al cliente")
                var niuLibro = new NodoSimpleCir(libro)
                var inicioLibro = auxCliente.down
                auxCliente.down = niuLibro
                niuLibro.next = inicioLibro
                confir = true
                break
            }
            auxCliente = auxCliente.next;
        }while(auxCliente != this.first)
        if(auxCliente == null || confir == false){
            console.log("No se encontró el cliente en la lista")
        }
    }

    mostrar(){//mostrar a los clientes
        var aux = new NodoCir();
        aux = this.first;
        do{
            console.log(aux.cliente);
            aux = aux.next;
        }while(aux != this.first);
    }

    showLibroCir(cliente){//ssublista de la circular
        var aux = this.first
        var confir = false
        //var existencia = false
        do {
            if(aux.cliente == cliente){
                confir = true
                console.log("****** Cliente" + cliente + "*****")
                var auxLibro = aux.down
                while(auxLibro != null){
                    console.log(auxLibro.libro)
                    auxLibro = auxLibro.next         
                }
                return
            }
            aux = aux.next
        }while(aux != this.first)
        if(cliente == null || confir == false){
            console.log("No se encontró el cliente en la lista")
        }
    }

    graficandoSub(cliente, num){//ssublista de la circular
        var aux = this.first
        var confir = false
        var acumulador = ""
        var auxnum = 0
        do {
            if(aux.cliente == cliente){
                //console.log("lo encuntra " + cliente)
                var auxLibro = aux.down
                console.log("holaaa probando")
                console.log(auxLibro)
                if(auxLibro != null){
                    while(auxLibro != null){
                        console.log("Entraa " + auxLibro.libro)
                        //console.log(auxLibro.libro)
                        if(confir == false){
                            console.log("ACUMULADOR " + acumulador)
                            if(auxLibro.libro != undefined){
                                acumulador += "N" + num + " -> " + auxLibro.libro + ListaCir.contU;
                                auxLibro = auxLibro.next
                                confir = true
                                ListaCir.contU++
                            }
                        }else{
                            console.log("ACUMULADOR " + acumulador)
                            if(auxLibro.libro != undefined){
                                acumulador +=  " -> " + auxLibro.libro  +
                                ListaCir.contU;
                                auxLibro = auxLibro.next
                                ListaCir.contU++
                            }
                        }
                        //auxLibro = auxLibro.next
                    }
                    this.contU++
                    acumulador += ";\n"
                    console.log("================")
                    console.log("*ACUMULADOR " + acumulador + "\n")
                    if(acumulador != null){
                        return acumulador
                    }else{
                        console.log("vacío")
                    }
                }
            }else{
                auxnum+=1
            }
            aux = aux.next
        }while(aux != this.first);
    };
    
    graficarCir(){
        console.log("cambios")
        console.log(this.first)
        console.log(this.last)
        //var codigodot = "digraph G{\nlabel=\" Sharon \";\nnode [shape=box];\n";
        var codigodot = "digraph G { rankdir = \"LR\" \n; node [shape = record, style=filled, fillcolor=seashell2, color=pink];\n";
        codigodot += "graph [size=\"11.70,6.25\"] label=\"Tabla Hash \"\n";
        codigodot += "node[shape=box]\n";
        var tem = this.first;
        var conex = "";
        var nodos = "";
        var num = 0;
        var sublistLibros = ""
        var rank = ""
        rank = "{rank=same;"
        while(tem != this.last){
            //console.log(aux.dato);
            nodos += "N" + num + "[label=\"" + tem.cliente + "\" ];\n"
            if(tem.next == this.last){//
                //this.insertarLibroCir(tem.next, libro)
                //---*console.log(this.graficandoSub(this.last.cliente, num));
                sublistLibros += this.graficandoSub(tem.cliente, num) + "\n" //--llamo al otro método que ocuparé para graficarCir la sublista
                rank += "N" + num + ";"//**Para poner el penúltimo en ranke
                num ++;
                nodos += "N" + num + "[label=\"" + this.last.cliente + "\" ];\n"
                //rank += "N" + num + ";"
                //console.log(graficandoSub(this.last.cliente));
            }
            if(tem.next != this.last){
                var auxnum = num + 1;
                conex += "N" + num + " -> N" +  auxnum + ";\n";
                //console.log(graficandoSub(cliente));
                sublistLibros += this.graficandoSub(tem.cliente, num) + "\n" //--llamo al otro método que ocuparé para graficarCir la sublista
                rank += "N" + num + ";"
            }
            if(tem.next == this.last){//para unir el último
                conex += "N" + auxnum + " -> N" + num + ";\n";
        //        conex += "N" + num + " -> N" +  0 + ";\n";
                //console.log(graficandoSub(cliente));
               // sublistLibros += this.graficandoSub(tem.cliente, num) + "\n"
                rank += "N" + num + ";"//**Para poner el último rannke
            }
            tem = tem.next;
            //console.log("________________" + tem.cliente);
            num ++;
        }
        num--;
        sublistLibros += this.graficandoSub(tem.cliente, num) + "\n" //--llamo al otro método que ocuparé para graficarCir la sublista
        codigodot += "//agregando nodos\n"
        codigodot += nodos + "\n"
        codigodot += "//agregado conexiones o flechas\n"
        //*codigodot += "{rank=same;\n" + conex + "\n}\n"
        //*codigodot += sublistLibros + "\n}"
        codigodot += conex
        codigodot += rank + "\n}\n";
        codigodot += sublistLibros + "}\n";//*sublista
        //codigodot.body.remove('undefined')
        codigodot = codigodot.replace(/undefined/g, '')
        console.log(codigodot);
        //document.write(codigodot)
        this.generarImagen(codigodot)
        return codigodot
    }
    pruebaEsconder(){
        document.getElementById("cuadro1").style.display = "none"
        document.getElementById("cuadro2").style.display = "none"
        
    }
    generarImagen(codigodot){
        d3.select("#grafica").graphviz()
            .width(3000)
            .height(1500)
            .renderDot(codigodot)
    }
    
}

var listalistas = new ListaCir();
listalistas.insertarUs(0);
listalistas.insertarUs(1);
listalistas.insertarUs(2);
listalistas.insertarUs(3);
listalistas.insertarUs(4);
listalistas.insertarUs(5);
listalistas.insertarUs(6);
listalistas.insertarUs(7);
listalistas.insertarUs(8);
listalistas.insertarUs(9);
listalistas.insertarUs(10);
listalistas.insertarUs(11);
listalistas.insertarUs(12);
listalistas.insertarUs(13);
listalistas.insertarUs(14);
listalistas.insertarUs(15);
listalistas.insertarUs(16);
listalistas.insertarUs(17);
listalistas.insertarUs(18);
listalistas.insertarUs(19);
listalistas.insertarUs(20);
listalistas.insertarUs(21);
listalistas.insertarUs(22);
listalistas.insertarUs(23);
listalistas.insertarUs(24);
listalistas.insertarUs(25);
listalistas.insertarUs(26);
listalistas.insertarUs(27);
listalistas.insertarUs(28);
listalistas.insertarUs(29);

/*

listalistas.insertarLibroCir(1,"x")
listalistas.insertarLibroCir(1,"x")
listalistas.insertarLibroCir(2,"x")
listalistas.insertarLibroCir(3,"x")
listalistas.insertarLibroCir(4,"x")
listalistas.insertarLibroCir(5,"x")
listalistas.insertarLibroCir(6,"x")

*/
listalistas.insertarPrincipal(4163);
listalistas.insertarPrincipal(4163);
listalistas.insertarPrincipal(4163);

//console.log(listalistas.tarea())
listalistas.graficarCir();
//listalistas.mostrar()
/*listalistas.insertarLibroCir("Sharon", "x")
listalistas.insertarLibroCir("Marleny", "x")
listalistas.insertarLibroCir("Sheny", "x")
listalistas.insertarLibroCir("Sonia", "x")
listalistas.insertarLibroCir("Yesi", "x")
listalistas.insertarLibroCir("Cami", "x")*/
/*var listalistas = new ListaCir();
listalistas.insertarUs("Sharon");
listalistas.insertarUs("Marleny");
listalistas.insertarUs("Sheny");
listalistas.insertarUs("Sonia");
listalistas.insertarUs("Yesi");
listalistas.insertarUs("Cami");
console.log("---------CLIENTES INSERTADOS---------")
//listalistas.mostrar()
listalistas.insertarLibroCir("Sharon", "x")
listalistas.insertarLibroCir("Marleny", "x")
listalistas.insertarLibroCir("Sheny", "x")
listalistas.insertarLibroCir("Sonia", "x")
listalistas.insertarLibroCir("Yesi", "x")
listalistas.insertarLibroCir("Cami", "x")

listalistas.insertarLibroCir("Sharon", "libro1S")
listalistas.insertarLibroCir("Sharon", "libro2S")
listalistas.insertarLibroCir("Sharon", "libro3S")

listalistas.insertarLibroCir("Marleny", "libro1M")
listalistas.insertarLibroCir("Marleny", "libro2M")
listalistas.insertarLibroCir("Marleny", "libro3M")

listalistas.insertarLibroCir("Sheny", "libro1SH")
listalistas.insertarLibroCir("Sheny", "libro2SH")
listalistas.insertarLibroCir("Sheny", "libro3SH")

listalistas.insertarLibroCir("Sonia", "libro1So")
listalistas.insertarLibroCir("Sonia", "libro2So")
listalistas.insertarLibroCir("Sonia", "libro3So")

listalistas.insertarLibroCir("Yesi", "libro1Y")
listalistas.insertarLibroCir("Yesi", "libro2Y")
listalistas.insertarLibroCir("Yesi", "libro3Y")

listalistas.insertarLibroCir("Cami", "libro1C")
listalistas.insertarLibroCir("Cami", "libro2C")
listalistas.insertarLibroCir("Cami", "libro3C")

listalistas.showLibroCir("Sharon")
listalistas.showLibroCir("Marleny")
listalistas.showLibroCir("Sheny")
listalistas.showLibroCir("Sonia")
listalistas.showLibroCir("Yesi")
listalistas.showLibroCir("Cami")

console.log(listalistas.graficarCir())

d3.select("#grafica").graphviz()
    .width(3000)
    .height(500)
    .renderDot(listalistas.graficarCir())
//listalistas.pruebaEsconder()*/