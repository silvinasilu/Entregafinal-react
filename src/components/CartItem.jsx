import React from 'react'
import { useState, useContext } from 'react';
import { Box, Flex, Center, Image, VStack, Text, IconButton } from '@chakra-ui/react';
import { Delete } from "@mui/icons-material";

import ItemCount from './ItemCount';

function CartItem({ producto, sacarDelCarrito }) {
    const [stock, setStock] = useState(producto.stock);

    function sumarStock(cantidad) {
        setStock(stock + cantidad);
    }

    function restarStock(cantidad) {
        if (stock) {
            setStock(stock - cantidad);
        }
    }

    return <Box>
        <Flex
            borderBottomWidth={"2px"}
            borderBottomColor={"pink.700"}
            alignItems="center"
            justifyContent="space-between"
            rounded bg="pink.200"
            color="pink.900"
            key={producto.id}
        >
            <Center p="2">
                <Image
                    boxSize='100px'
                    objectFit='cover'
                    src={producto.foto}
                    alt='Dan Abramov'
                ></Image>
            </Center>
            <VStack>
                <Text fontWeight="700" w="100%">{producto.nombre}</Text>
                <Text>${producto.precio}</Text>
                <Text>{stock}</Text>
            </VStack>
            <Center>
                <IconButton
                    border="none"
                    _hover={{ border: "none", bg: "pink.200" }}
                    bg="pink.200"
                    color="red.500"
                    icon={<Delete size="xl" />}
                    onClick={() => sacarDelCarrito(producto.id)}
                />
            </Center>
        </Flex>
        <Flex justifyContent={"center"} p="2" bg="pink.100">
            <ItemCount setStock={setStock} stock={stock} />
        </Flex>
    </Box>
}

export default CartItem