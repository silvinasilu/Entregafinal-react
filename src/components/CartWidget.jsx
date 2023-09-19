import { Center, Drawer, Text, DrawerBody, DrawerHeader, DrawerFooter, Stack, DrawerOverlay, DrawerContent, Button } from "@chakra-ui/react"
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Modal from "./Modal";
import CartItem from "./CartItem";



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
                                <CartItem sacarDelCarrito={sacarDelCarrito} producto={producto} />) :
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