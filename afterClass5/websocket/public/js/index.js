const socket = io();

socket.emit("connection", "nuevo cliente conectado");

document.getElementById("productForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = document.getElementById("productName").value;
  const productTitle = document.getElementById("productTitle").value;
  const productDescription =
    document.getElementById("productDescription").value;
  const productPrice = document.getElementById("productPrice").value;
  const productThumbnail = document.getElementById("productThumbnail").value;

  console.log(
    "Nuevo producto agregado:",
    productName,
    productTitle,
    productDescription,
    productPrice,
    productThumbnail
  );
  // Enviar el producto al servidor a través del socket
  socket.emit("agregarProducto", {
    name: productName,
    title: productTitle,
    description: productDescription,
    price: productPrice,
    thumbnail: productThumbnail,
  });

  // Limpiar el campo del formulario
  document.getElementById("productName").value = "";
  location.reload();
});

// Obtener la lista de productos inicial desde el servidor
socket.on("initialProductList", (productList) => {
  updateProductList(productList);
});

// Agregar un nuevo producto a la lista
socket.on("nuevoProductoAgregado", (newProduct) => {
  const productList = document.getElementById("productList");
  const li = document.createElement("li");
  li.textContent = newProduct.name;

  productList.appendChild(li);
});

// Actualizar la lista de productos
function updateProductList(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product.name;
    productList.appendChild(li);
  });
}

// ...

// Actualizar la lista de productos
function updateProductList(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${product.name}</h3>
      <p>Título: ${product.title}</p>
      <p>Descripción: ${product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Thumbnail: ${product.thumbnail}</p>
      <button class="btnEliminar" data-id="${product.id}">Eliminar</button>
    `;

    // Agregar el evento de clic al botón de eliminación
    const btnEliminar = li.querySelector(".btnEliminar");
    btnEliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });

    productList.appendChild(li);
  });
}

// Función para eliminar un producto
function eliminarProducto(productID) {
  // Emitir el evento 'eliminarProducto' al servidor con el ID del producto
  socket.emit("eliminarProducto", productID);
}

// Escuchar el evento 'productoEliminado' desde el servidor
