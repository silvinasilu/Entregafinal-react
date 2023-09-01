import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react"

export default function ItemDetail({ producto }) {
    return <Card maxW='sm'>
        <CardBody>
            <Image
                src={producto.foto}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{producto.nombre}</Heading>
                <Text>
                    {producto.detalle}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${producto.precio}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${producto.stock}
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                {/* <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button> */}
                <Button variant='ghost' colorScheme='blue'>
                    Agregar al carrito
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
}