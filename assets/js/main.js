const module = {
    productos: [],
    init: function () {
        this.cacheDom();
        this.bindingEvents();
    },
    cacheDom: function () {
        this.idInput = document.getElementById("idInput");
        this.nombreInput = document.getElementById("nombreInput");
        this.precioInput = document.getElementById("precioInput");
        this.button= document.getElementById("button");
        this.button_delete= document.getElementById("button_delete");
    },
    bindingEvents: function () {
        this.button.addEventListener("click", this.capturar.bind(this));
        this.button_delete.addEventListener("click", this.delete.bind(this));
    },
    
    capturar: function () {
        var id = this.idInput.value;
        var nombre = this.nombreInput.value;
        var precio = this.precioInput.value;
        const item={
            id, nombre, precio
        }
        this.add(item);

    },
    add: function (newProducto) {
        
        
        this.productos.push(newProducto);  
        
        this.paint(); 
        this.delete();
    },
    delete: function(){
        const date = this.idInput.value;
        const del = this.productos.filter(productos=> productos != date)
        console.log(del);
        console.log(this.productos);
         
    },
    paint:function(){
        this.tablaProducto = document.getElementById("productos");
        this.tbody = document.getElementById("tbody");
        this.tbody.innerHTML="";       

        this.productos.forEach(p=>{
        const tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerText = p.id;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerText = p.nombre;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerText = p.precio;
        tr.appendChild(td);

        this.tbody.appendChild(tr);
        });

        this.tablaProducto.appendChild(this.tbody);
    }
}
module.init();