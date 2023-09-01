import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { useDisclosure } from '@chakra-ui/react';
import ItemDetail from './components/ItemDetail'
import Catalogo from './components/Catalogo'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <NavBar onOpen={onOpen}/>
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Catalogo />
    </>
  )
}

export default App
