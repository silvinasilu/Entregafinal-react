import React from 'react'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import productoService from "../services/ProductService"

function ItemListContainer() {
    const [productos, setProductos] = useState([]);

    const buscarProductos = async () => {
        await productoService.buscarProductos()
            .then((productsSaved) => {
                console.log(productsSaved);
                setProductos(productsSaved);
            })
    }

    useEffect(() => {
        buscarProductos();
    }, [])
    return (
        <ItemList productos={productos} />
        )
}

export default ItemListContainer