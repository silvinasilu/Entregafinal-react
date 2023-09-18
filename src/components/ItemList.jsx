import { Container } from "@chakra-ui/react";
import ItemDetailContainer from "./ItemDetailContainer";

export default function ItemList({ productos }) {
    return <Container
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        maxW={"full"}
    >
        {productos.map((producto, index) =>
            <ItemDetailContainer producto={producto} />
        )}
    </Container>
}