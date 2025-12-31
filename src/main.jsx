import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/general.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TicTacToeBox from './gameComponents/TicTacToeBox.jsx'

import Home from './homeComponents/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<TicTacToeBox />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
