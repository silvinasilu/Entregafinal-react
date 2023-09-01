import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <NavBar />
      <Sidebar />
    </>
  )
}

export default App
