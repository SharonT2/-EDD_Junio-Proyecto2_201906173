class NodoTreeBB{
    constructor(valor) {//constructor de la clase NodoTreeBB
        this.valor = valor;
        this.left = null;
        this.right = null;
    }

    insertDataNTree(data){//insertar datos(método a llmar, este es el principal)
        if(data < this.valor){
            if(this.left == null){
                this.left = new NodoTreeBB(data)
                console.log(data)
            }else{
                this.left.insertDataNTree(data)
                console.log(data)
            }
        }else if (data > this.valor){
            if(this.right == null){
                this.right = new NodoTreeBB(data)
                console.log(data)
            }else{
                this.right.insertDataNTree(data)
                console.log(data)
            }
        }else{
            this.valor = data
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
                    return this.left.search(data);
                }
            }else if(data > this.valor.data){
                if(this.right == null){
                    return null
                }else{
                    return this.right.search(data)
                }
            }
        }
        return null
    }

    graphTree(){//Para graficar
        var estyle ="digraph G { rankdir=SH; node [shape = record, style=filled, fillcolor=seashell2, color=pink];\n";
        estyle += this.exploreTree();
        estyle += "}\n";
        this.generarImagen(estyle);
        console.log(estyle)
        return estyle;
    }

    exploreTree(){
        var content = ""
        if (this.left == null && this.right == null)
            //var procesado = texto
            content += "node"  + this.valor + " [ label =\"" + this.valor + "\"];\n";
        else
            content += "node" + this.valor + " [ label =\"<C0>|"  + this.valor  + "|<C1>\"];\n";
        if (this.left != null){
            content += this.left.exploreTree() + "node" + this.valor + ":C0->node" + this.left.valor + ";\n";
        }
        if (this.right != null){
            content += this.right.exploreTree() + "node" + (this.valor) + ":C1->node" + this.right.valor + ";\n";
        }
        return content;
    }

    generarImagen(codigodot){
        d3.select("#grafica").graphviz()
            .width(3000)
            .height(1500)
            .renderDot(codigodot)
    }
}

class arbolBB{
    constructor() {
        this.root = null;
    }
    insert(dato){
        if (this.root == null){
            this.root = new NodoTreeBB(dato);
            console.log(dato)
        }else{
            this.root.insert(dato);
            console.log(dato)
        }
    }
    search(dato){
        return this.root.search(dato);
    }
    
    graph(){
        return this.root.graph();
    }

    
}
var nodoTreeBB = new NodoTreeBB()
var arbol = new arbolBB()

//nodoTreeBB.insert(3)
//nodoTreeBB.insert(8)
//nodoTreeBB.insert(2)
//nodoTreeBB.insert(4)
//nodoTreeBB.insert(9)
//nodoTreeBB.insert(1)
//nodoTreeBB.insert(7)
//nodoTreeBB.insert(5)


nodoTreeBB.insertDataNTree(1877)
nodoTreeBB.insertDataNTree(9570)
nodoTreeBB.insertDataNTree(5683)
nodoTreeBB.insertDataNTree(1877)
nodoTreeBB.insertDataNTree(6812)
nodoTreeBB.insertDataNTree(4383)
nodoTreeBB.insertDataNTree(5637)
nodoTreeBB.insertDataNTree(7821)
nodoTreeBB.insertDataNTree(7957)
nodoTreeBB.insertDataNTree(769)
nodoTreeBB.insertDataNTree(7434)
nodoTreeBB.insertDataNTree(3222)
nodoTreeBB.insertDataNTree(8440)
nodoTreeBB.insertDataNTree(9609)
nodoTreeBB.insertDataNTree(5769)
nodoTreeBB.insertDataNTree(6501)
nodoTreeBB.insertDataNTree(8476)
nodoTreeBB.insertDataNTree(4144)
nodoTreeBB.insertDataNTree(629)
nodoTreeBB.insertDataNTree(4412)
nodoTreeBB.insertDataNTree(2483)
nodoTreeBB.insertDataNTree(754)
nodoTreeBB.insertDataNTree(5867)
nodoTreeBB.insertDataNTree(265)
nodoTreeBB.insertDataNTree(4990)
nodoTreeBB.insertDataNTree(8082)
nodoTreeBB.insertDataNTree(8129)
nodoTreeBB.insertDataNTree(6679)
nodoTreeBB.insertDataNTree(8057)
nodoTreeBB.insertDataNTree(3218)
nodoTreeBB.insertDataNTree(8278)
nodoTreeBB.insertDataNTree(6350)
nodoTreeBB.insertDataNTree(2795)
nodoTreeBB.insertDataNTree(6586)
nodoTreeBB.insertDataNTree(1775)
nodoTreeBB.insertDataNTree(367)
nodoTreeBB.graphTree()
//-------------
//-nodoTreeBB.insertDataNTree("Sharon Tagual")
//-nodoTreeBB.insertDataNTree("Ander Porón")
//-nodoTreeBB.insertDataNTree("Juan Godoy")
//-nodoTreeBB.insertDataNTree("Xhunik Miguel")
//-nodoTreeBB.insertDataNTree("Maria Magda")
//-nodoTreeBB.insertDataNTree("Alberto Reyes")
//-nodoTreeBB.insertDataNTree("Rosario Ramirez")
//-console.log(nodoTreeBB.graph())