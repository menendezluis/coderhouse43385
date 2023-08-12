import cartsModels from "../models/carts.models.js";

const addCart = async () => {
  const newCart = {
    products: [],
  };

  const cartAdded = await cartsModels.create(newCart);
  return cartAdded;
};

const getCart = async () => {
  const response = await cartsModels.find();
  return response;
};

const getCartById = async (id) => {
  const response = await cartsModels.findById(id);
  return response;
};

const addProductToCart = async (cid, pid) => {
  /* traigo el carrito con el ID buscado */
  const cart = await cartsModels.findById(cid);
  /* chequeo si dentro del carrito hay un producto con el pid igual */
  const productIndex = cart.products.findIndex(
    (product) => product.product === pid
  );
  /* condicional parar determinar la accion a tomar dependiendo si existe el producto o no */
  if (productIndex === -1) {
    const newProduct = {
      product: pid,
      quantity: 1,
    };

    cart.products.push(newProduct)
    const response = await cartsModels.findByIdAndUpdate(cid, {products: cart.products})
    return response;
  } else {
    /* obtengo la cantidad del producto y lo incremento en 1. */
    let newQuantity = cart.products[productIndex].quantity
    newQuantity++;

     // Actualizo el campo 'quantity' del producto existente
    cart.products[productIndex].quantity = newQuantity;
    await cartsModels.findByIdAndUpdate(cid, {products: cart.products})
    const response = await cartsModels.findById(cid)
    return response;
  }
};

const updateCart = async (cid, cart) => {
  const response = cartsModels.findByIdAndUpdate(cid, cart);
  return response;
};

export { addCart, getCart, getCartById, addProductToCart, updateCart };
