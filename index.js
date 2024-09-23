var productos = [
    { nombre: 'Acetaminofén', precioAnterior: 7.900, precioActual: 5.900, descuento: true },
    { nombre: 'Ibuprofeno', precioAnterior: 9.900, precioActual: 7.900, descuento: true },
    { nombre: 'Vitamina C', precioAnterior: 12.500, precioActual: 9.500, descuento: true },
    { nombre: 'Alcohol en gel', precioAnterior: 4.800, precioActual: 3.800, descuento: true },
    { nombre: 'Aspirina', precio: 6.900, descuento: false },
    { nombre: 'Omeprazol', precio: 8.300, descuento: false },
    { nombre: 'Azitromicina', precio: 7.500, descuento: false },
    { nombre: 'Diclofenaco', precio: 14.000, descuento: false }
];
var contenedor = document.querySelector('.product-grid');

function mostrarProductos(productosAMostrar) {
    contenedor.innerHTML = '';
    for (var i = 0; i < productosAMostrar.length; i++) {
        var producto = productosAMostrar[i];
        var productoElement = document.createElement('div');
        productoElement.className = 'product';
        productoElement.innerHTML = 
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