import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Main.css'
import App from './App.jsx'
import Parent from './components/Parent.jsx'
import PasswordGen from './smallProjects/PasswordGen.jsx'



createRoot(document.getElementById('loadedfries')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Parent /> */}
    <PasswordGen />
  </StrictMode>,
)
