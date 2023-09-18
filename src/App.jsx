import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { useDisclosure } from '@chakra-ui/react';
import CartWidget from './components/CartWidget'
import CartProvider from './components/CartContext'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [estaAbierto, setEstaAbierto] = useState(false);

  const abrirCarrito = () => {
    setEstaAbierto(true);
  }

  const cerrarCarrito = () => {
    setEstaAbierto(false);
  }

  return (
    <>
      <NavBar onOpen={onOpen} abrirCarrito={abrirCarrito} />
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <CartProvider >
        <ItemListContainer />
        <CartWidget
          isOpen={estaAbierto}
          onClose={() => cerrarCarrito()}
          onOpen={() => abrirCarrito()}
        />
      </CartProvider>
    </>
  )
}

export default App
