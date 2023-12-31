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
    Image
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../assets/logo.png';
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
                        <Box>
                            <Image
                                size="xs"
                                src={logo}
                                alt='logo-victoria-store'
                            />
                        </Box>
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