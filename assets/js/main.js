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
        this.button = document.getElementById("button");
    },
    bindingEvents: function () {
        this.button.addEventListener("click", this.capturar.bind(this));
    },
    producto: function (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    },
    capturar: function () {
        var id_p = this.idInput.value;
        var nombre_p = this.nombreInput.value;
        var precio_p = this.precioInput.value;
        newProducto = new this.producto(id_p, nombre_p, precio_p);
        console.log(newProducto);
        this.add();

    },
    add: function () {
        this.productos.push(newProducto);
        const tablaProducto = document.getElementById("productos");
        const tbody = document.createElement("tbody");
        const tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerText = newProducto.id;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerText = newProducto.nombre;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerText = newProducto.precio;
        tr.appendChild(td);

        tbody.appendChild(tr);


        tablaProducto.appendChild(tbody);

    }
}
module.init();