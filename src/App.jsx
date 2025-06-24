import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={</layout>}></Route>
        <Route path="/Home" element={</Home>}></Route>
        <Route path="/Productos" element={</Productos>}></Route>
        <Route path="/QuienesSomos" element={</QuienesSomos>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
