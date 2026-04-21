import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Main.css'
import App from './App.jsx'
import Parent from './components/Parent.jsx'
import PasswordGen from './smallProjects/PasswordGen.jsx'
import InputBox from './smallProjects/language-translator/InputBox.jsx'
import FinalBox from './smallProjects/language-translator/FinalBox.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Parent />
    {/* <FinalBox /> */}
    
  </StrictMode>,
)
