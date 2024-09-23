const productos = [
    { 
        nombre: "ACETAMINOFEN", 
        precioAnterior: 2000, 
        precioActual: 1500,
        imagen: "images/producto1.jpg"
    },
    { 
        nombre: "IBUPROFENO", 
        precioAnterior: 2500, 
        precioActual: 1800,
        imagen: "images/producto2.jpg"
    },
    { 
        nombre: "VITAMINA C", 
        precioAnterior: 3000, 
        precioActual: 2200,
        imagen: "images/producto3.jpg"
    },
    { 
        nombre: "ALCOHOL EN GEL", 
        precioAnterior: 1500, 
        precioActual: 1200,
        imagen: "images/producto4.jpg"
    },
    { 
        nombre: "ASPIRINA", 
        precioAnterior: 4000, 
        precioActual: 3500,
        imagen: "images/producto5.jpg"
    },
    { 
        nombre: "OMEPREZOL", 
        precioAnterior: 22.00, 
        precioActual: 18.00,
        imagen: "images/producto6.jpg"
    },
    { 
        nombre: "AZITROMICINA", 
        precioAnterior: 1800, 
        precioActual: 1400,
        imagen: "images/producto7.jpg"
    },
    { 
        nombre: "DICLOFENACO", 
        precioAnterior: 3500, 
        precioActual: 3000,
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
