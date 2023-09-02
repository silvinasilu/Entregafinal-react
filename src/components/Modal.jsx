import {
    Button, AlertDialog, AlertDialogBody, AlertDialogOverlay,
    AlertDialogContent, AlertDialogCloseButton, useDisclosure
} from "@chakra-ui/react"
import { useRef } from "react"

export default function Modal({ texto, modalAbierto, setModalAbierto }) {
    const cancelRef = useRef()

    return (
        <>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={() => setModalAbierto(!modalAbierto)}
                isOpen={modalAbierto}
                isCentered
            >
                <AlertDialogOverlay />
                <AlertDialogContent borderRadius={"30px"}>
                    <AlertDialogBody fontSize="lg" fontWeight="600" color="pink.100" textAlign={"center"} p="8" borderRadius={"30px"} bg="pink.300">
                        {texto}
                    </AlertDialogBody>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}