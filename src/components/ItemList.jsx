import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productoService from "../services/ProductService";

export default function ItemList({productos}) {
    return <Container
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        maxW={"full"}
    >
        {productos.map((producto, index) =>
            <Container
                key={index}
                w="auto"
                display="flex"
                justifyContent="center"
                p="4"
            >
                <ItemDetail producto={producto} />
            </Container>)
        }
    </Container>
}