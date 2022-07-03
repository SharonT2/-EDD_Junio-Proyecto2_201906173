class NodeAVL {
    constructor(valor, nombre_pelicula, descripcion, puntuacion_star, precio_Q) {
        this.valor = valor;//valor será el id
        this.nombre_pelicula = nombre_pelicula;
        this.descripcion = descripcion;
        this.puntuacion_star = puntuacion_star;
        this.precio_Q = precio_Q;
        this.height = 1;
        this.left = null;
        this.right = null;
    }

    graphTree(){//Para graficar
        //console.log("jiji1")
        var estyle ="digraph G { rankdir=SH; node [shape = record, style=filled, fillcolor=seashell2];\n";
        estyle += this.exploreTree();
        estyle += "}\n";
        //console.log("jiji")
        console.log(estyle)
        this.generarImagen(estyle);
        return estyle;
    }

    exploreTree(){
        var content = ""
        if (this.left == null && this.right == null)
            //var procesado = texto.split(" ").join("")
            content += "node"  + this.valor + " [ label =\"" + this.nombre_pelicula + "\"];\n";
        else
            content += "node" + this.valor + " [ label =\"<C0>|"  + this.nombre_pelicula  + "|<C1>\"];\n";
        if (this.left != null){
            content += this.left.exploreTree() + "node" + this.valor + ":C0->node" + this.left.valor + ";\n";
        }
        if (this.right != null){
            content += this.right.exploreTree() + "node" + (this.valor) + ":C1->node" + this.right.valor + ";\n";
        }
        return content;
    }

    generarImagen(codigodot){
        d3.select("#caja").graphviz()
            .width(3000)
            .height(1500)
            .fit(true)
            .renderDot(codigodot)
    }
}

class treeAVL {
    constructor() {
    this.root = null;
    }

    max(a, b) {
        return a > b ? a : b;
    }

    height(N) {
    if (N == null) return 0;
        return N.height;
    }

    rightRotate(y) {
        var x = y.left;
        var s = x.right;
        x.right = y;
        y.left = s;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        return x;
    }

    leftRotate(x) {
        var y = x.right;
        var s = y.left;
        y.left = x;
        x.right = s;
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
        return y;
    }

    Balanceo(ds) {//
        if (ds == null){
            return 0;
        }
        return this.height(ds.left) - this.height(ds.right);
    }

    insert(nodo, valor, nombre_pelicula, descripcion, puntuacion_star, precio_Q) {
        if (nodo == null){
            return new NodeAVL(valor, nombre_pelicula, descripcion, puntuacion_star, precio_Q);
        }
        if (valor < nodo.valor){
            nodo.left = this.insert(nodo.left, valor, nombre_pelicula, descripcion, puntuacion_star, precio_Q);
        }
        else if (valor > nodo.valor){
            nodo.right = this.insert(nodo.right, valor, nombre_pelicula, descripcion, puntuacion_star, precio_Q);
        }
        else{
            return nodo;
        }
        nodo.height = 1 + this.max(this.height(nodo.left), this.height(nodo.right));
        var balance = this.Balanceo(nodo);
        if (balance > 1 && valor < nodo.left.valor){
            return this.rightRotate(nodo);
        }
        if (balance < -1 && valor > nodo.right.valor){
            return this.leftRotate(nodo);
        }
        if (balance > 1 && valor > nodo.left.valor) {
            nodo.left = this.leftRotate(nodo.left);
            return this.rightRotate(nodo);
        }
        if (balance < -1 && valor < nodo.right.valor) {
            nodo.right = this.rightRotate(nodo.right);
            return this.leftRotate(nodo);
        }
        return nodo;
    }

    pOrden(node) {
        if (node != null) {
            console.log(node.valor + " " + node.descripcion);
            this.pOrden(node.left);
            this.pOrden(node.right);
        }
    }

    graphTree(node){//Para graficar
        //console.log("jiji1")
        var estyle ="digraph G { rankdir=SH; node [shape = record, style=filled, fillcolor=khaki, color=pink];\n";
        estyle += this.exploreTree(node);
        estyle += "}\n";
        //console.log("jiji")
        console.log(estyle)
        this.generarImagen(estyle);
        //this.root.generarImagen()
        return estyle;
    }

    exploreTree(node){
        var content = ""
        if (node != null) {
            if (node.left == null && node.right == null)
                //var procesado = texto.split(" ").join("")
                content += "node"  + node.valor + " [ label =\"" + node.nombre_pelicula + "\"];\n";
            else
                content += "node" + node.valor + " [ label =\"<C0>|"  + node.nombre_pelicula  + "|<C1>\"];\n";
            if (node.left != null){
                content += node.left.exploreTree() + "node" + node.valor + ":C0->node" + node.left.valor + ";\n";
            }
            if (node.right != null){
                content += node.right.exploreTree() + "node" + (node.valor) + ":C1->node" + node.right.valor + ";\n";
            }
            return content;
        }
    }

    buscarA(node, id){
        console.log("esto entra: " + node.valor + " " + id)
        if(node.valor == id){
            return node.valor//si lo encuentra retornará el dato
        }else{
            if(id < node.valor){
                if(node.left == null)return null;
                else return this.buscarA(node.left, id);
            }else if (id > node.valor){
                if(node.right == null)return null;
                else return this.buscarA(node.right, id);
            }
        }
        return null;
    }

    generarImagen(codigodot){
        d3.select("#caja")
            .graphviz()
            .zoom(false)
            .renderDot(codigodot)
            //.width(3000)
            //.height(1500)
            //.renderDot(codigodot)
    }

    insertH(node, contenido){//contenido será mi div
        const con = document.createElement("div");
        //con.innerHTML +=  peliculas.id_pelicula + "<br/>"
        con.innerHTML += "<b>Nombre Pelicula:</b> " + node.nombre_pelicula + "<br/>"
        con.innerHTML += "<b>Descripcion Pelicula: </b><br/>"
        con.innerHTML +=  node.descripcion + "<br/>"
        //con.innerHTML += peliculas.puntuacion_star + "<br/>"
        con.innerHTML += "<b>Precio Pelicula:</b> " + node.precio_Q + "<br/>"
        con.innerHTML += node.puntuacion_star + "<br/>"
        //con.innerHTML += "<hr />";
        //node.valor.comments.forEach((c) => {
        //    con.innerHTML += c + "<br />"
        //});
        con.innerHTML += "<hr />";
        con.innerHTML += `<input type="text" name="puntuacion" id="puntuacion${node.valor}"/>`//<input type="text" name="peli" id="peli"/></p>
        con.innerHTML += `<button onclick="principal.puntear(${node.valor})">ModificarPuntuacion</button>`;//<input type="text" name="nombre"/></p>
        con.innerHTML += "<br />";
        con.innerHTML += `<input type="text" id="comments-${node.valor}"/>`//<input type="text" name="peli" id="peli"/></p>
        con.innerHTML += `<button onclick="principal.comentar(${node.valor})">Añadir comentario</button>`;
        con.innerHTML += "<hr />";
        document.querySelector(contenido).appendChild(con);
        }

    OrdenAsc(nodo, contenido){//raiz y lienzo
        if(nodo == null) return;
        
        this.OrdenAsc(nodo.left, contenido);
        this.insertH(nodo, contenido);
        this.OrdenAsc(nodo.right, contenido);
        }

    OrdenDesc(nodo, contenido){//raiz y lienzo
        if(nodo == null) return;
        
        this.OrdenDesc(nodo.right, contenido);
        this.insertH(nodo, contenido);
        this.OrdenDesc(nodo.left, contenido);
        }
    
}
//ahorita var treeS = new treeAVL();
//var nodo = new Node();
//11,23,35,46,54,26,83,20,100,54,2,1,6,8
// treeS.root = treeS.insert(treeS.root, 11);
// treeS.root = treeS.insert(treeS.root, 23);
// treeS.root = treeS.insert(treeS.root, 35);
// treeS.root = treeS.insert(treeS.root, 46);
// treeS.root = treeS.insert(treeS.root, 54);
// treeS.root = treeS.insert(treeS.root, 26);
// treeS.root = treeS.insert(treeS.root, 83);
// treeS.root = treeS.insert(treeS.root, 20);
// treeS.root = treeS.insert(treeS.root, 100);
// treeS.root = treeS.insert(treeS.root, 54);
// treeS.root = treeS.insert(treeS.root, 2);
// treeS.root = treeS.insert(treeS.root, 1);
// treeS.root = treeS.insert(treeS.root, 6);
// treeS.root = treeS.insert(treeS.root, 8);


/* AHORITA QUITÉ
treeS.root = treeS.insert(treeS.root, 7140394722109);
treeS.root = treeS.insert(treeS.root, 5710530186284);
treeS.root = treeS.insert(treeS.root, 2561983506422);
treeS.root = treeS.insert(treeS.root, 7851050325132);
treeS.root = treeS.insert(treeS.root, 6568804293458);
treeS.root = treeS.insert(treeS.root, 2984229606920);
treeS.root = treeS.insert(treeS.root, 9716381936092);
treeS.root = treeS.insert(treeS.root, 1219344961531);
treeS.root = treeS.insert(treeS.root, 8154736748444);
treeS.root = treeS.insert(treeS.root, 4560930105887);
treeS.root = treeS.insert(treeS.root, 3601995024933);
treeS.root = treeS.insert(treeS.root, 8175940098554);
treeS.root = treeS.insert(treeS.root, 3679640345001);
treeS.root = treeS.insert(treeS.root, 3542469120193);
treeS.root = treeS.insert(treeS.root, 9038170328286);
treeS.root = treeS.insert(treeS.root, 4862364527422);
treeS.root = treeS.insert(treeS.root, 1175928735759);
treeS.root = treeS.insert(treeS.root, 6124436571933);
treeS.root = treeS.insert(treeS.root, 4306113783482);

treeS.pOrden(treeS.root);
console.log("======================")
console.log(treeS.graphTree(treeS.root));
treeS.graphTree(treeS.root);
]*/