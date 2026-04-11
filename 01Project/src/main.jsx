import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Main.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import OrderDashboard from './components/OrderDashboard.jsx'
import TopSelling from './components/TopSelling.jsx'
import Parent from './components/Parent.jsx'
import BgChanger from './smallProjects/BgChanger.jsx'



createRoot(document.getElementById('loadedfries')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Parent /> */}
    <BgChanger />
  </StrictMode>,
)
