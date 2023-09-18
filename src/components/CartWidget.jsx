import { IconButton, Divider, VStack, Image, Center, Drawer, Flex, Text, DrawerBody, DrawerHeader, DrawerFooter, Stack, DrawerOverlay, DrawerContent, Button } from "@chakra-ui/react"
import { Delete } from "@mui/icons-material";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Modal from "./Modal";


export default function CartWidget({ isOpen, onOpen, onClose }) {
    const { carrito, sacarDelCarrito, vaciarCarrito } = useContext(CartContext);
    const [modalAbierto, setModalAbierto] = useState(true);


    return <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>{'Carrito de Compras'}</DrawerHeader>
            <DrawerBody>
                <Stack as={'nav'} spacing={4}>
                    {
                        carrito ?
                            carrito.map(producto =>
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
                                </Flex>) :
                            <Center p="5%">
                                <Text color="black">No tenés productos cargados...</Text>
                            </Center>
                    }
                </Stack>
            </DrawerBody>
            <DrawerFooter bg="pink.500" justifyContent={"center"} alignItems={"center"}>
                <Button
                    bg="pink.100"
                    color="pink.500"
                    onClick={() => { 
                        vaciarCarrito(); 
                        setModalAbierto(true) 
                    }}
                >Comprar</Button>
            </DrawerFooter>
        </DrawerContent>
        <Modal texto="Compra realizada con éxito ;)" modalAbierto={modalAbierto} setModalAbierto={setModalAbierto}></Modal>
    </Drawer>
}