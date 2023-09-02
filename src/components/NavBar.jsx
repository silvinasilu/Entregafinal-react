import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { ShoppingCart } from '@mui/icons-material'

const Links = []

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

export default function NavBar({ onOpen, abrirCarrito }) {
    
    return (
        <>
            <Box bg={useColorModeValue('pink.200', 'pink.300')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={<HamburgerIcon />}
                        aria-label={'Open Menu'}
                        onClick={onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>
                        {/* <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack> */}
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                cursor={'pointer'}
                                minW={0}
                                onClick={abrirCarrito}>
                                <Icon color="gray.500" as={ShoppingCart} />
                            </MenuButton>
                            {/* <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList> */}
                        </Menu>
                    </Flex>
                </Flex>

                {/* {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null} */}
            </Box>
        </>
    )
}