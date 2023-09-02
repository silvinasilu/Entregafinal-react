import { IconButton, Divider, VStack, Image, Center, Drawer, Flex, Text, DrawerBody, DrawerHeader, DrawerFooter, Stack, DrawerOverlay, DrawerContent, Button } from "@chakra-ui/react"
import { Delete } from "@mui/icons-material";
import { useState } from "react";

export default function CartWidget({ isOpen, onOpen, onClose }) {
    const [productosCargados, setProductosCargados] = useState([{
        "precio": 25,
        "stock": 100,
        "foto": "",
        "descripcion": "La mejor remera de tu vida!",
        "nombre": "Remera musculosa",
        "tipo": "REMERA"
    },
    {
        "precio": 30,
        "stock": 5,
        "foto": "",
        "nombre": "Pantalón cargo",
        "descripcion": "El mejor pantalón de tu vida!",
        "tipo": "PANTALÓN"
    }]);

    return <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>{'Carrito de Compras'}</DrawerHeader>
            <DrawerBody>
                <Stack as={'nav'} spacing={4}>
                    {
                        productosCargados ?
                            productosCargados.map(producto =>
                                <Flex
                                    borderBottomWidth={"2px"}
                                    borderBottomColor={"pink.700"}
                                    alignItems="center"
                                    justifyContent="space-between"
                                    rounded bg="pink.200"
                                    color="pink.900"
                                >
                                    <Center p="2">
                                        <Image
                                            boxSize='100px'
                                            objectFit='cover'
                                            src='https://bit.ly/dan-abramov'
                                            alt='Dan Abramov'
                                        ></Image>
                                    </Center>
                                    <VStack>
                                        <Text fontWeight="700" w="100%">{producto.nombre}</Text>
                                        <Text>${producto.precio}</Text>
                                    </VStack>
                                    <Center>
                                        <IconButton border="none" _hover={{ border: "none", bg: "pink.200" }} bg="pink.200" color="red.500" icon={<Delete size="xl" />} />
                                    </Center>
                                </Flex>) :
                            <Center p="5%">
                                <Text>No tenés productos cargados...</Text>
                            </Center>
                    }
                </Stack>
            </DrawerBody>
            <DrawerFooter bg="pink.500" justifyContent={"center"}>
                <Button bg="pink.100"><Text color="pink.500">Comprar</Text></Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
}