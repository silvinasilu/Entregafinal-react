import React from 'react'
import { Container } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({producto}) {
    return (
        <Container
            key={producto.id}
            w="auto"
            display="flex"
            justifyContent="center"
            p="4"
        >
            <ItemDetail producto={producto} />

        </Container>
    )
}

export default ItemDetailContainer