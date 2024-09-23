var productos = [
    { 
        nombre: "Producto 1", 
        precioAnterior: 20.00, 
        precioActual: 15.00,
        imagen: "images/producto1.jpg"
    },
    { 
        nombre: "Producto 2", 
        precioAnterior: 25.00, 
        precioActual: 18.00,
        imagen: "images/producto2.jpg"
    },
    { 
        nombre: "Producto 3", 
        precioAnterior: 30.00, 
        precioActual: 22.00,
        imagen: "images/producto3.jpg"
    },
    { 
        nombre: "Producto 4", 
        precioAnterior: 15.00, 
        precioActual: 12.00,
        imagen: "images/producto4.jpg"
    },
    { 
        nombre: "Producto 5", 
        precioAnterior: 40.00, 
        precioActual: 35.00,
        imagen: "images/producto5.jpg"
    },
    { 
        nombre: "Producto 6", 
        precioAnterior: 22.00, 
        precioActual: 18.00,
        imagen: "images/producto6.jpg"
    },
    { 
        nombre: "Producto 7", 
        precioAnterior: 18.00, 
        precioActual: 14.00,
        imagen: "images/producto7.jpg"
    },
    { 
        nombre: "Producto 8", 
        precioAnterior: 35.00, 
        precioActual: 30.00,
        imagen: "images/producto8.jpg"
    }
];
var contenedor = document.querySelector('.product-grid');

function mostrarProductos(productosAMostrar) {
    contenedor.innerHTML = '';
    for (var i = 0; i < productosAMostrar.length; i++) {
        var producto = productosAMostrar[i];
        var productoElement = document.createElement('div');
        productoElement.className = 'product';
        productoElement.innerHTML = 
            '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">' +
            '<h3>' + producto.nombre + '</h3>' +
            '<p class="price">' +
            '<span class="original-price">$' + producto.precioAnterior.toFixed(2) + '</span> ' +
            '<span class="discount-price">$' + producto.precioActual.toFixed(2) + '</span>' +
            '</p>' +
            '<button>Agregar al carrito</button>';
        contenedor.appendChild(productoElement);
    }
}

function filtrarProductos() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var productosFiltrados = productos.filter(function(producto) {
        return producto.nombre.toLowerCase().includes(searchTerm);
    });
    mostrarProductos(productosFiltrados);
}

document.getElementById('search-input').addEventListener('input', filtrarProductos);

// Ordenar productos alfabéticamente
productos.sort(function(a, b) {
    return a.nombre.localeCompare(b.nombre);
});

// Mostrar productos inicialmente
mostrarProductos(productos);
