import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    function sacarDelCarrito(id) {
        let carritoSinProducto = carrito.filter(producto => producto.id !== id);
        console.log(carritoSinProducto);
        setCarrito(carritoSinProducto);
    }

    function agregarAlCarrito(producto) {
        let carritoActualizado = [...carrito, producto];
        setCarrito(carritoActualizado);
    }

    return <CartContext.Provider
        value={{
            carrito: carrito,
            sacarDelCarrito: sacarDelCarrito,
            agregarAlCarrito: agregarAlCarrito
        }}
    >
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;