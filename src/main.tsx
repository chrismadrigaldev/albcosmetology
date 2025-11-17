import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ALBCosmetology } from "./ALBCosmetology.tsx"
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ALBCosmetology />
    </BrowserRouter>
  </StrictMode>,
)
