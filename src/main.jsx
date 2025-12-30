import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/general.css"
import Game from './gameComponents/Game.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
)
