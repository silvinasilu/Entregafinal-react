import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from "@chakra-ui/react"

export default function ItemDetail({ producto }) {
    return <Card maxW='sm' textAlign={"center"}>
        <CardBody>
            <Image
                src={producto.foto}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{producto.nombre}</Heading>
                <Text>
                    {producto.descripcion}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${producto.precio}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    {producto.stock}
                </Text>
            </Stack>
        </CardBody>
        <Divider color="pink.800"/>
        <CardFooter display="flex" justifyContent={"end"}>
            {/* <ButtonGroup spacing='2'> */}
                {/* <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button> */}
                <Button color="pink.50" bg="pink.400" variant='ghost'>
                    Agregar al carrito
                </Button>
            {/* </ButtonGroup> */}
        </CardFooter>
    </Card>
}