import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { useDisclosure } from '@chakra-ui/react';
import ItemDetail from './components/ItemDetail'
import Catalogo from './components/Catalogo'
import CartWidget from './components/CartWidget'

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
      <Catalogo />
      <CartWidget
        isOpen={estaAbierto}
        onClose={() => cerrarCarrito()}
        onOpen={() => abrirCarrito()}
      />
    </>
  )
}

export default App
