let carrito = [];

// Cargar productos desde JSON
fetch('../data/productos.json')
  .then(res => res.json())
  .then(productos => {
    mostrarProductos(productos);
  });

function mostrarProductos(productos) {
  const contenedor = document.getElementById('productos');
  productos.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>Precio: $${prod.precio}</p>
      <button onclick="agregarAlCarrito(${prod.id}, '${prod.nombre}', ${prod.precio})">Agregar</button>
    `;
    contenedor.appendChild(card);
  });
}

function agregarAlCarrito(id, nombre, precio) {
  carrito.push({ id, nombre, precio });
  actualizarCarrito();
  Swal.fire({
    title: 'Producto agregado',
    text: `${nombre} se agregó al carrito`,
    icon: 'success',
    confirmButtonText: 'OK'
  });
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  let total = 0;
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
    total += item.precio;
  });
  document.getElementById('total').textContent = total;
}

document.getElementById('checkout').addEventListener('click', () => {
  if (carrito.length === 0) {
    Swal.fire('Carrito vacío', 'Agrega productos antes de comprar', 'warning');
  } else {
    Swal.fire({
      title: 'Compra realizada',
      text: '¡Gracias por tu compra!',
      icon: 'success'
    });
    carrito = [];
    actualizarCarrito();
  }
});
