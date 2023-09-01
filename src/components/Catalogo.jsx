import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

export default function Catalogo() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("/mock-data/catalogo.json")
            .then(response => response.json())
            .then(data => setProductos(data))
    }, [])
    return <Container maxW={"full"}>
        {productos.map((producto, index) => <Container p="2"><ItemDetail key={index} producto={producto} /></Container>)}
    </Container>
}