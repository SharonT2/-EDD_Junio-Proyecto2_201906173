class NodoTreeBB{
    constructor(valor, nombre_actor, correo, descripcion) {//constructor de la clase NodoTreeBB
        this.valor = valor;//dni
        this.nombre_actor = nombre_actor;
        this.correo =  correo;
        this.descripcion = descripcion;
        this.left = null;
        this.right = null;
    }

    insertDataNTree(data, nombre_actor, correo, descripcion){//insertar datos(método a llmar, este es el principal)
        if(data < this.valor){
            if(this.left == null){
                this.left = new NodoTreeBB(data, nombre_actor, correo, descripcion)
                console.log(data, nombre_actor, correo, descripcion)
            }else{
                this.left.insertDataNTree(data, nombre_actor, correo, descripcion)
                console.log(data, nombre_actor, correo, descripcion)
            }
        }else if (data > this.valor){
            if(this.right == null){
                this.right = new NodoTreeBB(data, nombre_actor, correo, descripcion)
                console.log(data, nombre_actor, correo, descripcion)
            }else{
                this.right.insertDataNTree(data, nombre_actor, correo, descripcion)
                console.log(data, nombre_actor, correo, descripcion)
            }
        }else{
            this.valor = data
            this.nombre_actor = nombre_actor;
            this.correo =  correo;
            this.descripcion = descripcion;
        }
    }

    search(data){
        if(this.valor == data){
            return this.valor
        }else{
            if(data < this.valor){
                if(this.left == null){
                    return null
                }else{
                    return this.left.search(data, nombre_actor, correo, descripcion);
                }
            }else if(data > this.valor.data){
                if(this.right == null){
                    return null
                }else{
                    return this.right.search(data, nombre_actor, correo, descripcion)
                }
            }
        }
        return null
    }

    graphTree(){//Para graficar
        var estyle ="digraph G { rankdir=SH; node [shape = record, style=filled, fillcolor=seashell2, color=pink];\n";
        estyle += this.exploreTree();
        estyle += "}\n";
        console.log(estyle)
        this.generarImagen(estyle);
        return estyle;
    }

    exploreTree(){
        var content = ""
        if (this.left == null && this.right == null)
            //var procesado = texto
            content += "node"  + this.valor + " [ label =\"" + this.nombre_actor + "\"];\n";
        else
            content += "node" + this.valor + " [ label =\"<C0>|"  + this.nombre_actor  + "|<C1>\"];\n";
        if (this.left != null){
            content += this.left.exploreTree() + "node" + this.valor + ":C0->node" + this.left.valor + ";\n";
        }
        if (this.right != null){
            content += this.right.exploreTree() + "node" + (this.valor) + ":C1->node" + this.right.valor + ";\n";
        }
        return content;
    }

    insertH(node, contenido){//contenido será mi div
        const con = document.createElement("div");
        //con.innerHTML += "" + node.valor + "<br/>"
        con.innerHTML +=  "<b>NombreActor:</b> " + node.nombre_actor + "<br/>"
        con.innerHTML += "<b>Correo:</b> " + node.correo + "<br/>"
        con.innerHTML += "<b>Descripcion:</b> " + node.descripcion + "<br/><br/>"
        //con.innerHTML += `<button onclick=" comprar(${node.valor})">AlquilarPeli</button>`;
        document.querySelector(contenido).appendChild(con);
        }

    ActoresInorden(nodo, contenido){
        if(nodo == null) return;
        this.ActoresInorden(nodo.left, contenido);
        console.log("esto: " + nodo)
        this.insertH(nodo, contenido);
        this.ActoresInorden(nodo.right, contenido);

    }
    

    ActoresPreorden(nodo, contenido){
        console.log("esto: " + nodo)
        if(nodo == null) return;            //console.log(nodo.valor + " " + nodo.descripcion);
        console.log("esto: " + nodo)
        this.insertH(nodo, contenido);
        this.ActoresPreorden(nodo.left, contenido);
        this.ActoresPreorden(nodo.right, contenido);
    }
    ActoresPostorden(nodo, contenido){
        console.log("esto: " + nodo)
        if(nodo == null) return;
        //console.log(nodo.vAlor + " " + nodo.descripcion);
        this.ActoresPostorden(nodo.left, contenido);
        this.ActoresPostorden(nodo.right, contenido);
        console.log("esto: " + nodo)
        this.insertH(nodo, contenido);
        
    }

    generarImagen(codigodot){
        d3.select("#caja").graphviz()
            .zoom(false)
            .renderDot(codigodot)
    }
}

class arbolBB{
    constructor() {
        this.root = null;
    }
    insert(dato){
        if (this.root == null){
            this.root = new NodoTreeBB(data);
            console.log(data)
        }else{
            this.root.insert(dato);
            console.log(dato)
        }
    }
    search(dato){
        return this.root.search(data);
    }
    
    graph(){
        return this.root.graph();
    }

    
}
/*esto quite
var nodoTreeBB = new NodoTreeBB()
var arbol = new arbolBB() */

//nodoTreeBB.insert(3)
//nodoTreeBB.insert(8)
//nodoTreeBB.insert(2)
//nodoTreeBB.insert(4)
//nodoTreeBB.insert(9)
//nodoTreeBB.insert(1)
//nodoTreeBB.insert(7)
//nodoTreeBB.insert(5)

/*ESTO QUITÉ
nodoTreeBB.insertDataNTree("1877", "nombre1", "corr3eo1", "descripcion1")
nodoTreeBB.insertDataNTree("18777", "nombre2", "corr3eo2", "descripcion2")
nodoTreeBB.insertDataNTree("18777", "nombre3", "corr3eo3", "descripcion3")
nodoTreeBB.graphTree()*/
//-------------
//-nodoTreeBB.insertDataNTree("Sharon Tagual")
//-nodoTreeBB.insertDataNTree("Ander Porón")
//-nodoTreeBB.insertDataNTree("Juan Godoy")
//-nodoTreeBB.insertDataNTree("Xhunik Miguel")
//-nodoTreeBB.insertDataNTree("Maria Magda")
//-nodoTreeBB.insertDataNTree("Alberto Reyes")
//-nodoTreeBB.insertDataNTree("Rosario Ramirez")
//-console.log(nodoTreeBB.graph())