import React, { useState } from 'react'
import { ButtonGroup, Button } from '@chakra-ui/react'

function ItemCount() {
  const [cantidadAComprar, setCantidadAComprar]=useState(1);

  function sumarProducto() {
    setCantidadAComprar(cantidadAComprar + 1)
  }
  function restarProducto() {
    setCantidadAComprar(cantidadAComprar ? cantidadAComprar - 1 : cantidadAComprar)
  }
  return (
    <ButtonGroup variant='outline' spacing='6'>
      <Button bg="pink.600" color="white" onClick={sumarProducto}>+</Button>
      <Button bg="white" color="pink.600" onClick={restarProducto}>-</Button>
      <Button bg="pink.100" color="pink.600" borderColor= "pink.100">{cantidadAComprar}</Button>
    </ButtonGroup>
  )
}

export default ItemCount
