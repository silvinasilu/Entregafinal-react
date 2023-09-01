import { useState } from "react"
import { useDisclosure, useColorModeValue } from "@chakra-ui/react"
import { Box, Drawer, DrawerContent, DrawerOverlay, DrawerHeader, DrawerBody, Stack } from "@chakra-ui/react"

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('left')

  const Links = ['Ropa-Calzado Hombres', 'Ropa-Calzado Mujeres', 'Ropa-Calzado Niños']

  const NavLink = (props) => {
    const { children } = props

    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('pink.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
      </Box>
    )
  }

  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth='1px'>{'Productos'}</DrawerHeader>
        <DrawerBody>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}