const productos = [
    { nombre: 'Paracetamol', precioAnterior: 7.900, precioActual: 5.900, descuento: true },
    { nombre: 'Ibuprofeno', precioAnterior: 9.900, precioActual: 7.900, descuento: true },
    { nombre: 'Vitamina C', precioAnterior: 12.500, precioActual: 9.500, descuento: true },
    { nombre: 'Alcohol en gel', precioAnterior: 4.800, precioActual: 3.800, descuento: true },
    { nombre: 'Aspirina', precio: 6.900, descuento: false },
    { nombre: 'Omeprazol', precio: 8.300, descuento: false },
    { nombre: 'Loratadina', precio: 7.500, descuento: false },
    { nombre: 'Multivitamínico', precio: 14.00, descuento: false }
];
function mostrarProductos(productosAMostrar) {
    const contenedor = document.querySelector('.producto-container');
    contenedor.innerHTML = ''; // Limpiar contenedor

    productosAMostrar.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        
        if (producto.descuento) {
            productoElement.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p class="precio-anterior">$${producto.precioAnterior.toFixed(2)}</p>
                <p class="precio-actual">$${producto.precioActual.toFixed(2)}</p>
            `;
        } else {
            productoElement.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p class="precio-actual">$${producto.precio.toFixed(2)}</p>
            `;
        }
        
        contenedor.appendChild(productoElement);
    });
}