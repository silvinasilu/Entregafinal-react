import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
    const [carrito, setCarrito] = useState([{
        "precio": 25,
        "stock": 100,
        id: 2,
        "foto": "",
        "descripcion": "La mejor remera de tu vida!",
        "nombre": "Remera musculosa",
        "tipo": "REMERA"
    },
    {
        "precio": 30,
        "stock": 5,
        id: 3,
        "foto": "",
        "nombre": "Pantalón cargo",
        "descripcion": "El mejor pantalón de tu vida!",
        "tipo": "PANTALÓN"
    }]);

    function sacarDelCarrito(id) {
        let carritoSinProducto = carrito.filter(producto => producto.id !== id);
        console.log(carritoSinProducto);
        setCarrito(carritoSinProducto);
    }

    return <CartContext.Provider
        value={{
            carrito: carrito,
            sacarDelCarrito: sacarDelCarrito
        }}
    >
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;