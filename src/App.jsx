import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { useDisclosure } from '@chakra-ui/react';

function App() {
  const [estaAbierto, setEstaAbierto] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavBar onOpen={onOpen}/>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default App
